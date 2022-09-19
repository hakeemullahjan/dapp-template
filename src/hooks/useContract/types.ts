import { Interface } from '@ethersproject/abi'
import { Provider } from '@ethersproject/providers'
import { Signer } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import {
  Ember__factory,
  Erc20__factory,
  Kolnet__factory,
  SocialBlocks__factory,
} from '@contracts/types'

interface Factory {
  readonly abi: unknown
  createInterface: () => Interface
  connect: (address: string, signerOrProvider: Signer | Provider) => Contract
}

export enum AvailableContracts {
  TUSDT = '0xD92E713d051C37EbB2561803a3b5FBAbc4962431',
  KOLNET = '0x0bF6951d389001A45BBa5533DfF34B0bdEFbAcA0',
  EMBER = '0x7fAd81d31958af935aDF7C21d452cF315E07C2F0',
  SOCIAL_BLOCKS = '0x7698b5D7869bC1A5643C4E7261Dd621cE7E8D6fF',
}

export const addressToFactoryMapping: { [key: string]: Factory } = {
  [AvailableContracts.TUSDT]: Erc20__factory,
  [AvailableContracts.KOLNET]: Kolnet__factory,
  [AvailableContracts.EMBER]: Ember__factory,
  [AvailableContracts.SOCIAL_BLOCKS]: SocialBlocks__factory,
}
