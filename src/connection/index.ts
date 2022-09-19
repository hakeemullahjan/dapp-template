import { initializeConnector, Web3ReactHooks } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Connector } from '@web3-react/types'

export enum SupportedWallets {
  METAMASK = 'metamask',
}

export enum ConnectionType {
  INJECTED = 'INJECTED',
  //   COINBASE_WALLET = 'COINBASE_WALLET',
  //   WALLET_CONNECT = 'WALLET_CONNECT',
  //   FORTMATIC = 'FORTMATIC',
  //   NETWORK = 'NETWORK',
  //   GNOSIS_SAFE = 'GNOSIS_SAFE',
}

export interface Connection {
  connector: Connector
  hooks: Web3ReactHooks
  type: ConnectionType
}

function onError(error: Error) {
  console.debug(`web3-react error: ${error}`)
}

const [web3Injected, web3InjectedHooks] = initializeConnector<MetaMask>(
  actions => new MetaMask({ actions, onError }),
)
export const injectedConnection: Connection = {
  connector: web3Injected,
  hooks: web3InjectedHooks,
  type: ConnectionType.INJECTED,
}

const CONNECTIONS = [
  //   gnosisSafeConnection,
  injectedConnection,
  //   coinbaseWalletConnection,
  //   walletConnectConnection,
  //   fortmaticConnection,
  //   networkConnection,
]

export function getConnection(c: Connector | ConnectionType) {
  if (c instanceof Connector) {
    const connection = CONNECTIONS.find(
      connection => connection.connector === c,
    )
    if (!connection) {
      throw Error('unsupported connector')
    }
    return connection
  } else {
    switch (c) {
      case ConnectionType.INJECTED:
        return injectedConnection
      //   case ConnectionType.COINBASE_WALLET:
      //     return coinbaseWalletConnection
      //   case ConnectionType.WALLET_CONNECT:
      //     return walletConnectConnection
      //   case ConnectionType.FORTMATIC:
      //     return fortmaticConnection
      //   case ConnectionType.NETWORK:
      //     return networkConnection
      //   case ConnectionType.GNOSIS_SAFE:
      //     return gnosisSafeConnection
    }
  }
}
