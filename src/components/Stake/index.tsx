import React, { FC, useState } from 'react'
import { ethers } from 'ethers'
import {
  Erc20__factory,
  // DaoEventsV2__factory,
  // PHXStake__factory,
} from '@contracts/types/index'

const Stake: FC = () => {
  const [provider, setProvider] = useState<
    ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider
  >()
  const [account, setAccount] = useState<string>()
  const [tokenBalance, setTokenBalance] = useState<string>()
  const [eventsCount, setEventsCount] = useState<string>()
  const [dummy, setDummy] = useState<any>('0')

  const connect = async () => {
    // if (!window.ethereum?.request) {
    //   alert('MetaMask is not installed!')
    //   return
    // }
    // const provider = new ethers.providers.Web3Provider(window.ethereum)
    // // const provider = new ethers.providers.JsonRpcProvider(
    // //   'https://eth-rinkeby.alchemyapi.io/v2/QqePo-cZyepMXoMuqlHZFBFVjUMyUHw6',
    // // )
    // const accounts = await window.ethereum.request({
    //   method: 'eth_requestAccounts',
    // })
    // setProvider(provider)
    // setAccount(accounts[0])
  }

  const getTokenBalance = async () => {
    if (provider && account) {
      console.log('getting token balance')
      const TOKEN_ADDR = '0xfe1b6abc39e46cec54d275efb4b29b33be176c2a'
      const token = Erc20__factory.connect(TOKEN_ADDR, provider.getSigner())

      const rawBalance = await token.balanceOf(account.toString())
      const decimals = await token.decimals()

      const balance = ethers.utils.formatUnits(rawBalance, decimals)
      setTokenBalance(balance)

      token.on('Transfer', (to, amount, from) => {
        setDummy({ to, amount, from })
      })
    }
  }

  const getEventCount = async () => {
    // if (provider && account) {
    //   const TOKEN_ADDR = '0xa8b9A1dA93B4a96d9D0a464f6897A9A7D20c9874'
    //   const contract = DaoEventsV2__factory.connect(
    //     TOKEN_ADDR,
    //     provider.getSigner(),
    //   )
    //   const rawCount = await contract.getEventsCount()
    //   setEventsCount(rawCount.toString())
    // }
  }

  const approvePHNX = async () => {
    // if (provider && account) {
    //   console.log('approving PHNX')
    //   const TOKEN_ADDR = '0xa8b9A1dA93B4a96d9D0a464f6897A9A7D20c9874'
    //   const contract = DaoEventsV2__factory.connect(
    //     TOKEN_ADDR,
    //     provider.getSigner(),
    //   )
    //   const tx = await contract.changeToken(
    //     '0xa8b9A1dA93B4a96d9D0a464f6897A9A7D20c9874',
    //     { gasLimit: 25000 },
    //   )
    //   await tx.wait()
    //   console.log('tx', tx)
    //   setDummy(tx)
    // }
  }

  const tryEthers = async () => {
    if (provider && account) {
      // Accounts
      const accounts = await provider.listAccounts()
      console.log(accounts[0])

      // Network & Chain ID
      // const network = await provider.getNetwork()
      // const chainId = network.chainId

      // Balance
      const address = account
      const balance = await provider.getBalance(address)
      // console.log(`The ${address} balance: ${balance.toString()}`)

      // Convert (Ether -> Wei)
      const weiBigNumber = ethers.utils.parseEther('0.2')
      const wei = weiBigNumber.toString()
      console.log('wei: ', wei)

      // Convert (Wei -> Ether)
      // const address = '0x28d319067E209fa43Ef46bF54343Dae4CEDd3824'
      // const balanceBigNumber = await ethers.providers.getBalance(address)
      // const balanceEth = ethers.utils.formatEther(balance.toString())
      console.log(`user balance: ${balance} Ether`)

      // setDummy(balanceEth)
    }
  }

  return (
    <>
      <button onClick={connect}>Connect</button>
      <p>Account: {account}</p>
      <button onClick={getTokenBalance}>Get Token Balance</button>
      <p>Token Balance: {tokenBalance}</p>
      <button onClick={getEventCount}>Get Events Count</button>
      <p>Events Count:{eventsCount}</p>
      <br />
      <button onClick={approvePHNX}>approve PHNX</button>
      <br />
      <button onClick={() => tryEthers()}>tryEthers</button> :
      {JSON.stringify(dummy)}
    </>
  )
}

export default Stake
