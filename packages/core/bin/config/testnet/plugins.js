module.exports = {
    "@arkecosystem/core-event-emitter": {},
    "@arkecosystem/core-logger-pino": {},
    "@arkecosystem/core-database-postgres": {
        connection: {
            host: process.env.CORE_DB_HOST || "localhost",
            port: process.env.CORE_DB_PORT || 5432,
            database: process.env.CORE_DB_DATABASE || `${process.env.CORE_TOKEN}_${process.env.CORE_NETWORK_NAME}`,
            user: process.env.CORE_DB_USERNAME || process.env.CORE_TOKEN,
            password: process.env.CORE_DB_PASSWORD || "password",
        },
    },
    "@arkecosystem/core-transaction-pool": {
        enabled: true,
        maxTransactionsPerSender: process.env.CORE_TRANSACTION_POOL_MAX_PER_SENDER || 300,
        allowedSenders: [],
        dynamicFees: {
            enabled: false,
            minFeePool: 3000,
            minFeeBroadcast: 3000,
            addonBytes: {
                transfer: 100,
                secondSignature: 250,
                delegateRegistration: 400000,
                vote: 100,
                multiSignature: 500,
                ipfs: 250,
                timelockTransfer: 500,
                multiPayment: 500,
                delegateResignation: 400000,
            },
        },
    },
    "@arkecosystem/core-p2p": {
        host: process.env.CORE_P2P_HOST || "0.0.0.0",
        port: process.env.CORE_P2P_PORT || 4002,
        minimumNetworkReach: 2,
        coldStart: 5,
    },
    "@arkecosystem/core-blockchain": {},
    "@arkecosystem/core-api": {
        enabled: !process.env.CORE_API_DISABLED,
        host: process.env.CORE_API_HOST || "0.0.0.0",
        port: process.env.CORE_API_PORT || 4003,
        whitelist: ["*"],
    },
    "@arkecosystem/core-webhooks": {
        enabled: process.env.CORE_WEBHOOKS_ENABLED,
        server: {
            host: process.env.CORE_WEBHOOKS_HOST || "0.0.0.0",
            port: process.env.CORE_WEBHOOKS_PORT || 4004,
            whitelist: ["127.0.0.1", "::ffff:127.0.0.1"],
        },
    },
    "@arkecosystem/core-forger": {
        hosts: [`http://127.0.0.1:${process.env.CORE_P2P_PORT || 4002}`],
    },
    "@arkecosystem/core-json-rpc": {
        enabled: process.env.CORE_JSON_RPC_ENABLED,
        host: process.env.CORE_JSON_RPC_HOST || "0.0.0.0",
        port: process.env.CORE_JSON_RPC_PORT || 8080,
        allowRemote: false,
        whitelist: ["127.0.0.1", "::ffff:127.0.0.1"],
    },
    "@arkecosystem/core-snapshots": {},
    "@mlh/ark-taco-shop-api": {
        enabled: process.env.ARK_INVENTORY_API_ENABLED || true,
        server: {
            enabled: process.env.ARK_INVENTORY_API_SERVER_ENABLED || true,
            host: process.env.ARK_INVENTORY_API_SERVER_HOST || "0.0.0.0",
            port: process.env.ARK_INVENTORY_API_SERVER_PORT || 5000,
        },
    },
    "@mlh/ark-taco-shop": {
        enabled: process.env.ARK_TACO_SHOP_ENABLED || true,
        server: {
            enabled: process.env.ARK_TACO_SHOP_SERVER_ENABLED || true,
            host: process.env.ARK_TACO_SHOP_SERVER_HOST || "0.0.0.0",
            port: process.env.ARK_TACO_SHOP_SERVER_PORT || 3000,
        },
        inventoryApi: {
            sender: process.env.ARK_TACO_SHOP_INVENTORY_SENDER_ADDRESS || "ARZxYDGGuZfnDXBA9FcKWgefmtmkVvbbF5",
            passphrase:
                process.env.ARK_TACO_SHOP_INVENTORY_SENDER_PASSPHRASE ||
                "venue diet divert account flame universe reveal kite gym derive snack negative",
            recipient: process.env.ARK_TACO_SHOP_INVENTORY_RECIPIENT || "AVFbKzGEwwiCyTib9gRwEDkERs5USvFtTT",
            uri: process.env.ARK_TACO_SHOP_INVENTORY_API_URL || "http://0.0.0.0:5000/api",
        },
    },
};
