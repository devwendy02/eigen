(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1744], {
        62893: function(e, _, n) {
            Promise.resolve().then(n.t.bind(n, 12645, 23)), Promise.resolve().then(n.t.bind(n, 18474, 23)), Promise.resolve().then(n.t.bind(n, 58953, 23)), Promise.resolve().then(n.t.bind(n, 90574, 23)), Promise.resolve().then(n.t.bind(n, 65982, 23)), Promise.resolve().then(n.t.bind(n, 45297, 23))
        },
        11373: function(e, _, n) {
            "use strict";
            var t, E, r = n(65722),
                i = n(58781),
                o = n(27944),
                N = window;
            N.__sentryRewritesTunnelPath__ = "/monitoring", N.SENTRY_RELEASE = {
                id: "61e4c349ceb672e02058b11a14cffb01f08af73a"
            }, N.__sentryBasePath = void 0, N.__rewriteFramesAssetPrefixPath__ = "", t = r.env.NEXT_PUBLIC_VERCEL_ENV, E = r.env.NEXT_PUBLIC_SENTRY_DSN, i.S1({
                dsn: E,
                sampleRate: .25,
                tracesSampler: e => e.name.includes("GET /api/trpc/[trpc]") ? .01 : e.name.includes("middleware") ? .001 : "pageload" === e.op ? .1 : .25,
                debug: !1,
                replaysOnErrorSampleRate: 1,
                replaysSessionSampleRate: .1,
                integrations: [new o.Le({
                    maskAllText: !0,
                    blockAllMedia: !0
                })],
                environment: t,
                ignoreErrors: ["'defineProperty' on proxy: trap returned falsish for property 'request'", "Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.", "Socket stalled when trying to connect to wss://relay.walletconnect.org", "Can't find variable: bytecode", "WebSocket connection failed for host: wss://relay.walletconnect.org", "websocket error 1006:", "Cannot read properties of undefined (reading 'providerType')", "Socket stalled when trying to connect to wss://relay.walletconnect.com", "Cannot read properties of undefined (reading 'code')", "No injected ethereum object.", "Cannot redefine property: ethereum"]
            })
        },
        65722: function(e, _, n) {
            "use strict";
            n.d(_, {
                env: function() {
                    return i
                }
            });
            var t = n(64601),
                E = n(48684),
                r = n(32608);
            let i = (0, t.D)({
                server: {
                    NODE_ENV: E.z.enum(["development", "test", "production"]),
                    MONGODB_URI: E.z.string(),
                    NEXT_PUBLIC_CHAIN_ID: E.z.string().min(1),
                    COINGECKO_API_KEY: E.z.string().min(1),
                    NEXT_PUBLIC_EIGENLAYER_BACKEND_URI: E.z.string().min(1),
                    NEXT_PUBLIC_VERCEL_ENV: E.z.enum(["development", "production", "preview"]),
                    NEXT_PUBLIC_SENTRY_DSN: E.z.optional(E.z.string()),
                    NEXT_PUBLIC_SENTRY_PROJECT: E.z.optional(E.z.string()),
                    CHAINALYSIS_API_KEY: E.z.string().min(1),
                    NEXT_PUBLIC_CHAINALYSIS_URL: E.z.string().min(1),
                    OPERATOR_BLOCKLIST: E.z.string(),
                    NEXT_PUBLIC_SANCTIONS_ON: E.z.boolean(),
                    NEXT_PUBLIC_RESTAKE_DISPLAY: E.z.object({
                        price: E.z.array(E.z.object({}))
                    }),
                    AVS_ALLOWLIST: E.z.string(),
                    NEXT_PUBLIC_CONTRACT_ENV: E.z.enum(["mainnet-ethereum", "testnet-holesky", "preprod-holesky"]),
                    STAKER_ADDRESS_ALLOWLIST: E.z.string().optional()
                },
                client: {
                    NEXT_PUBLIC_BLOCK_EXPLORER_URL: E.z.string().min(1),
                    NEXT_PUBLIC_CHAIN_ID: E.z.string().min(1),
                    NEXT_PUBLIC_MIN_OPERATOR_TVL: E.z.string().min(1),
                    NEXT_PUBLIC_VERCEL_ENV: E.z.enum(["development", "production", "preview"]),
                    NEXT_PUBLIC_SENTRY_DSN: E.z.optional(E.z.string()),
                    NEXT_PUBLIC_SENTRY_PROJECT: E.z.optional(E.z.string()),
                    NEXT_PUBLIC_EIGENLAYER_BACKEND_URI: E.z.string().min(1),
                    NEXT_PUBLIC_SANCTIONS_ON: E.z.boolean(),
                    NEXT_PUBLIC_RESTAKE_DISPLAY: E.z.object({
                        display_order: E.z.string().array()
                    }),
                    NEXT_PUBLIC_CENTRALIZED_RISK: E.z.number().min(0),
                    NEXT_PUBLIC_RESTAKE_CTA_SYMBOL: E.z.string().min(1),
                    NEXT_PUBLIC_SHOW_RESTAKE_CTA: E.z.boolean(),
                    NEXT_PUBLIC_CONTRACT_ENV: E.z.enum(["mainnet-ethereum", "testnet-holesky", "preprod-holesky"]),
                    NEXT_PUBLIC_CENTRALIZED_RISK_TOGGLE: E.z.boolean()
                },
                runtimeEnv: {
                    NODE_ENV: "production",
                    MONGODB_URI: r.env.MONGODB_URI,
                    NEXT_PUBLIC_EIGENLAYER_BACKEND_URI: "https://webserver-mainnet-ethereum.eigenlayer.xyz/api/v1",
                    NEXT_PUBLIC_BLOCK_EXPLORER_URL: "https://etherscan.io",
                    NEXT_PUBLIC_CHAIN_ID: "1",
                    COINGECKO_API_KEY: r.env.COINGECKO_API_KEY,
                    NEXT_PUBLIC_MIN_OPERATOR_TVL: "0.0000000001",
                    NEXT_PUBLIC_VERCEL_ENV: "production",
                    NEXT_PUBLIC_SENTRY_DSN: "https://a7ecd7c2abdc8b67d3dcf7b77dc15244@o4504923617099776.ingest.sentry.io/4506362028949504",
                    NEXT_PUBLIC_SENTRY_PROJECT: "restaking-mainnet",
                    CHAINALYSIS_API_KEY: r.env.CHAINALYSIS_API_KEY,
                    NEXT_PUBLIC_CHAINALYSIS_URL: "https://api.chainalysis.com",
                    NEXT_PUBLIC_SANCTIONS_ON: !0,
                    OPERATOR_BLOCKLIST: r.env.OPERATOR_BLOCKLIST,
                    NEXT_PUBLIC_RESTAKE_DISPLAY: JSON.parse('{"display_order":["EIGEN","native","lst"],"price":[]}'),
                    NEXT_PUBLIC_RESTAKE_CTA_SYMBOL: "EIGEN",
                    NEXT_PUBLIC_SHOW_RESTAKE_CTA: !0,
                    AVS_ALLOWLIST: r.env.AVS_ALLOWLIST,
                    STAKER_ADDRESS_ALLOWLIST: r.env.STAKER_ADDRESS_ALLOWLIST,
                    NEXT_PUBLIC_CONTRACT_ENV: "mainnet-ethereum",
                    NEXT_PUBLIC_CENTRALIZED_RISK: parseFloat("0.1"),
                    NEXT_PUBLIC_CENTRALIZED_RISK_TOGGLE: !0
                },
                skipValidation: !!r.env.SKIP_ENV_VALIDATION
            })
        }
    },
    function(e) {
        var _ = function(_) {
            return e(e.s = _)
        };
        e.O(0, [7051, 2597, 4473], function() {
            return _(11373), _(51040), _(62893)
        }), _N_E = e.O()
    }
]);