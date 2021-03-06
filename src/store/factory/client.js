import Client from '@liquality/client'

import BitcoinSwapProvider from '@liquality/bitcoin-swap-provider'
import BitcoinJsWalletProvider from '@liquality/bitcoin-js-wallet-provider'
import BitcoinEsploraBatchApiProvider from '@liquality/bitcoin-esplora-batch-api-provider'
import BitcoinEsploraSwapFindProvider from '@liquality/bitcoin-esplora-swap-find-provider'
import BitcoinEarnFeeProvider from '@liquality/bitcoin-earn-fee-provider'
import BitcoinRpcFeeProvider from '@liquality/bitcoin-rpc-fee-provider'

import EthereumRpcProvider from '@liquality/ethereum-rpc-provider'
import EthereumJsWalletProvider from '@liquality/ethereum-js-wallet-provider'
import EthereumSwapProvider from '@liquality/ethereum-swap-provider'
import EthereumScraperSwapFindProvider from '@liquality/ethereum-scraper-swap-find-provider'
import EthereumGasStationFeeProvider from '@liquality/ethereum-gas-station-fee-provider'
import EthereumRpcFeeProvider from '@liquality/ethereum-rpc-fee-provider'

import EthereumErc20Provider from '@liquality/ethereum-erc20-provider'
import EthereumErc20SwapProvider from '@liquality/ethereum-erc20-swap-provider'
import EthereumErc20ScraperSwapFindProvider from '@liquality/ethereum-erc20-scraper-swap-find-provider'

import BitcoinNetworks from '@liquality/bitcoin-networks'
import EthereumNetworks from '@liquality/ethereum-networks'

const rpc = {
  BTC: {
    bitcoin: ['https://liquality.io/electrs-batch', 'https://liquality.io/electrs', BitcoinNetworks.bitcoin, 2],
    bitcoin_testnet: ['https://liquality.io/electrs-testnet-batch', 'https://liquality.io/testnet/electrs', BitcoinNetworks.bitcoin_testnet, 2]
  },
  ETH: {
    mainnet: ['https://mainnet.infura.io/v3/da99ebc8c0964bb8bb757b6f8cc40f1f'],
    rinkeby: ['https://rinkeby.infura.io/v3/da99ebc8c0964bb8bb757b6f8cc40f1f']
  },
  DAI: {
    mainnet: ['https://mainnet.infura.io/v3/da99ebc8c0964bb8bb757b6f8cc40f1f'],
    rinkeby: ['https://rinkeby.infura.io/v3/da99ebc8c0964bb8bb757b6f8cc40f1f']
  },
  USDC: {
    mainnet: ['https://mainnet.infura.io/v3/da99ebc8c0964bb8bb757b6f8cc40f1f']
  },
  USDT: {
    mainnet: ['https://mainnet.infura.io/v3/da99ebc8c0964bb8bb757b6f8cc40f1f']
  },
  WBTC: {
    mainnet: ['https://mainnet.infura.io/v3/da99ebc8c0964bb8bb757b6f8cc40f1f']
  },
  UNI: {
    mainnet: ['https://mainnet.infura.io/v3/da99ebc8c0964bb8bb757b6f8cc40f1f']
  }
}

const networks = {
  BTC: BitcoinNetworks,
  ETH: EthereumNetworks,
  DAI: EthereumNetworks,
  USDC: EthereumNetworks,
  USDT: EthereumNetworks,
  WBTC: EthereumNetworks,
  UNI: EthereumNetworks
}

const RpcProviders = {
  BTC: BitcoinEsploraBatchApiProvider,
  ETH: EthereumRpcProvider,
  DAI: EthereumRpcProvider,
  USDC: EthereumRpcProvider,
  USDT: EthereumRpcProvider,
  WBTC: EthereumRpcProvider,
  UNI: EthereumRpcProvider
}

const JsWalletProviders = {
  BTC: BitcoinJsWalletProvider,
  ETH: EthereumJsWalletProvider,
  DAI: EthereumJsWalletProvider,
  USDC: EthereumJsWalletProvider,
  USDT: EthereumJsWalletProvider,
  WBTC: EthereumJsWalletProvider,
  UNI: EthereumJsWalletProvider
}

const SwapProviders = {
  BTC: BitcoinSwapProvider,
  ETH: EthereumSwapProvider,
  DAI: EthereumErc20SwapProvider,
  USDC: EthereumErc20SwapProvider,
  USDT: EthereumErc20SwapProvider,
  WBTC: EthereumErc20SwapProvider,
  UNI: EthereumErc20SwapProvider
}

const AdditionalSwapProviders = {
  BTC: BitcoinEsploraSwapFindProvider,
  ETH: EthereumScraperSwapFindProvider,
  DAI: EthereumErc20ScraperSwapFindProvider,
  USDC: EthereumErc20ScraperSwapFindProvider,
  USDT: EthereumErc20ScraperSwapFindProvider,
  WBTC: EthereumErc20ScraperSwapFindProvider,
  UNI: EthereumErc20ScraperSwapFindProvider
}

const FeeProviders = {
  BTC: {
    bitcoin: BitcoinEarnFeeProvider,
    bitcoin_testnet: BitcoinRpcFeeProvider
  },
  ETH: {
    mainnet: EthereumGasStationFeeProvider,
    rinkeby: EthereumRpcFeeProvider
  },
  DAI: {
    mainnet: EthereumGasStationFeeProvider,
    rinkeby: EthereumRpcFeeProvider
  },
  USDC: {
    mainnet: EthereumGasStationFeeProvider,
    rinkeby: EthereumRpcFeeProvider
  },
  USDT: {
    mainnet: EthereumGasStationFeeProvider,
    rinkeby: EthereumRpcFeeProvider
  },
  WBTC: {
    mainnet: EthereumGasStationFeeProvider,
    rinkeby: EthereumRpcFeeProvider
  },
  UNI: {
    mainnet: EthereumGasStationFeeProvider,
    rinkeby: EthereumRpcFeeProvider
  }
}

const ERC20 = {
  DAI: {
    mainnet: '0x6b175474e89094c44da98b954eedeac495271d0f',
    rinkeby: '0xcE2748BE67fB4346654B4500c4BB0642536365FC'
  },
  USDC: {
    mainnet: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
  },
  USDT: {
    mainnet: '0xdac17f958d2ee523a2206206994597c13d831ec7'
  },
  WBTC: {
    mainnet: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
  },
  UNI: {
    mainnet: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
  }
}

export const NetworkAssets = {
  mainnet: ['BTC', 'ETH', 'DAI', 'USDC', 'USDT', 'WBTC', 'UNI'],
  testnet: ['BTC', 'ETH', 'DAI']
}

export const createClient = (network, mnemonic) => {
  const isTestnet = network === 'testnet'

  const NetworkArgs = {
    BTC: isTestnet ? 'bitcoin_testnet' : 'bitcoin',
    ETH: isTestnet ? 'rinkeby' : 'mainnet',
    DAI: isTestnet ? 'rinkeby' : 'mainnet',
    USDC: isTestnet ? 'rinkeby' : 'mainnet',
    USDT: isTestnet ? 'rinkeby' : 'mainnet',
    WBTC: isTestnet ? 'rinkeby' : 'mainnet',
    UNI: isTestnet ? 'rinkeby' : 'mainnet'
  }

  const SwapArgs = {
    BTC: [networks.BTC[NetworkArgs.BTC], 'p2wsh'],
    ETH: [],
    DAI: [],
    USDC: [],
    USDT: [],
    WBTC: [],
    UNI: []
  }

  const AdditionalSwapArgs = {
    BTC: [isTestnet ? 'https://liquality.io/testnet/electrs' : 'https://liquality.io/electrs'],
    ETH: [isTestnet ? 'https://liquality.io/eth-rinkeby-api' : 'https://liquality.io/eth-mainnet-api'],
    DAI: [isTestnet ? 'https://liquality.io/eth-rinkeby-api' : 'https://liquality.io/eth-mainnet-api'],
    USDC: [isTestnet ? 'https://liquality.io/eth-rinkeby-api' : 'https://liquality.io/eth-mainnet-api'],
    USDT: [isTestnet ? 'https://liquality.io/eth-rinkeby-api' : 'https://liquality.io/eth-mainnet-api'],
    WBTC: [isTestnet ? 'https://liquality.io/eth-rinkeby-api' : 'https://liquality.io/eth-mainnet-api'],
    UNI: [isTestnet ? 'https://liquality.io/eth-rinkeby-api' : 'https://liquality.io/eth-mainnet-api']
  }

  return NetworkAssets[network].map(asset => {
    const client = new Client()

    client.addProvider(new RpcProviders[asset](
      ...rpc[asset][NetworkArgs[asset]]
    ))

    client.addProvider(new JsWalletProviders[asset](
      networks[asset][NetworkArgs[asset]],
      mnemonic
    ))

    if (ERC20[asset] && ERC20[asset][NetworkArgs[asset]]) {
      client.addProvider(new EthereumErc20Provider(ERC20[asset][NetworkArgs[asset]]))
    }

    client.addProvider(new SwapProviders[asset](
      ...SwapArgs[asset]
    ))

    client.addProvider(new AdditionalSwapProviders[asset](
      ...AdditionalSwapArgs[asset]
    ))

    client.addProvider(new FeeProviders[asset][NetworkArgs[asset]]())

    return {
      asset,
      client
    }
  }).reduce((acc, { asset, client }) => {
    acc[asset] = client

    return acc
  }, {})
}
