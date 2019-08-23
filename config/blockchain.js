module.exports = {
  default: {
    enabled: true,
    rpcHost: "localhost", 
    rpcPort: 8545, 
    rpcCorsDomain: {
      auto: true,
      additionalCors: []
    },
    wsRPC: true,
    wsOrigins: { 
      auto: true,
      additionalCors: []
    },
    wsHost: "localhost",
    wsPort: 8546,

  },

  development: {
    networkType: "custom", 
    networkId: 1337,
    isDev: true,
    datadir: ".embark/development/datadir",
    mineWhenNeeded: true, 
    nodiscover: true, 
    maxpeers: 0, 
    proxy: true, 
    targetGasLimit: 8000000, 
    simulatorBlocktime: 0
  },

  testnet: {
    networkType: "testnet",
    syncMode: "light",
    accounts: [
      {
        nodeAccounts: true,
        password: ".password"
      }
    ]
  },

  livenet: {
    networkType: "livenet",
    syncMode: "light",
    accounts: [
      {
        nodeAccounts: true,
        password: ".password"
      }
    ]
  }
};
