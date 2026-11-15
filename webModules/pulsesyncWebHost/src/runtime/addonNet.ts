import type { AddonNet, NetRequestOptions } from '../contracts'

const DEFAULT_TIMEOUT_MS = 15_000
const MAX_TIMEOUT_MS = 2_147_483_647

export type AddonTextNetwork = {
    readText: (requestId: string, url: string, accept: string) => Promise<{ status: number; statusText: string; text: string } | null>
    cancel: (requestId: string) => Promise<unknown>
}

export function createAddonNet(lifetime: AbortSignal, localNetwork?: AddonTextNetwork): AddonNet {
    async function request<T>(
        input: RequestInfo | URL,
        options: NetRequestOptions | undefined,
        read: (response: Response) => Promise<T>,
        useTextBridge = false,
    ): Promise<T> {
        const { timeoutMs = DEFAULT_TIMEOUT_MS, ...init } = options ?? {}

        if (!Number.isSafeInteger(timeoutMs) || timeoutMs < 0 || timeoutMs > MAX_TIMEOUT_MS) {
            throw new RangeError(`timeoutMs must be an integer between 0 and ${MAX_TIMEOUT_MS}`)
        }

        const request = new Request(input, init)
        const timeout = new AbortController()
        const signal = AbortSignal.any([lifetime, request.signal, timeout.signal])

        signal.throwIfAborted()

        const timer =
            timeoutMs > 0
                ? window.setTimeout(
                      () => timeout.abort(new DOMException('Request timed out', 'TimeoutError')),
                      timeoutMs,
                  )
                : undefined

        try {
            // Chromium sends the document's origin for fetches from an isolated world.
            if (
                useTextBridge &&
                localNetwork &&
                !(input instanceof Request) &&
                request.method === 'GET' &&
                request.url.startsWith('https://') &&
                request.credentials !== 'include' &&
                Object.keys(init).every(key => ['method', 'credentials', 'headers', 'signal'].includes(key)) &&
                [...request.headers.keys()].every(name => name === 'accept')
            ) {
                const requestId = crypto.randomUUID()
                const cancel = () => void localNetwork.cancel(requestId).catch(() => {})

                signal.addEventListener('abort', cancel, { once: true })

                try {
                    const result = await localNetwork.readText(requestId, request.url, request.headers.get('accept') ?? '')

                    signal.throwIfAborted()

                    if (result) {
                        const { status, statusText, text } = result
                        const body = [204, 205, 304].includes(status) ? null : text

                        return await read(new Response(body, { status, statusText }))
                    }
                } catch (error) {
                    signal.throwIfAborted()
                    throw error
                } finally {
                    signal.removeEventListener('abort', cancel)
                }
            }

            const response = await window.fetch(request, { signal })

            return await read(response)
        } finally {
            if (timer !== undefined) {
                window.clearTimeout(timer)
            }
        }
    }

    function requireSuccess(response: Response) {
        if (response.ok) {
            return
        }

        void response.body?.cancel().catch(() => {})
        throw new Error(`Request failed: HTTP ${response.status} ${response.statusText}`.trim())
    }

    return Object.freeze({
        fetch: (input, options) => request(input, options, async response => response),
        json: <T = unknown>(input: RequestInfo | URL, options?: NetRequestOptions) =>
            request<T>(
                input,
                options,
                response => {
                    requireSuccess(response)

                    return response.json() as Promise<T>
                },
                true,
            ),
        text: (input, options) =>
            request(
                input,
                options,
                response => {
                    requireSuccess(response)

                    return response.text()
                },
                true,
            ),
    } satisfies AddonNet)
}
