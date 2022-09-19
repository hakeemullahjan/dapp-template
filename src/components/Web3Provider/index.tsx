import React, { FC } from 'react'
import App from '@components/App'
import { useAppSelector } from '@hooks/'
import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { Connector } from '@web3-react/types'
import { getConnection } from '../../connection'

type Props = unknown

const Web3Provider: FC<Props> = () => {
  const wallet = useAppSelector(state => state.wallet.selectedWallet)

  const connection = getConnection(wallet)
  const connectors: [Connector, Web3ReactHooks][] = [connection].map(
    ({ connector, hooks }) => [connector, hooks],
  )

  return (
    <Web3ReactProvider connectors={connectors} key={'metamask'}>
      <App />
    </Web3ReactProvider>
  )
}

export default Web3Provider
