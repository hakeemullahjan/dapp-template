import { Contract } from '@ethersproject/contracts'
import { useWeb3React } from '@web3-react/core'
import { useMemo } from 'react'
import { addressToFactoryMapping } from './types'

export function useContract<T extends Contract = Contract>(
  _contractAddress: string,
): T | null {
  const { provider, account, chainId } = useWeb3React()

  return useMemo(() => {
    const factory = addressToFactoryMapping[_contractAddress]

    if (!provider || !account || !chainId || !factory) return null

    return factory.connect(
      _contractAddress,
      account ? provider.getSigner(account) : provider,
    ) as T
  }, [_contractAddress, provider, account, chainId])
}
