import { useEffect, useState } from 'react'

import type { Web3ReactHooks } from '@web3-react/core'
import type { BigNumber } from '@ethersproject/bignumber'

export const useNativeBalance = (
  provider?: ReturnType<Web3ReactHooks['useProvider']>,
  account?: string
): BigNumber | undefined => {
  const [walletBalance, setWalletBalance] = useState<BigNumber | undefined>()

  useEffect(() => {
    if (provider && account?.length) {
      const fetchBalance = async (account: string) => {
        const res: BigNumber | undefined = await provider?.getBalance(account)
        setWalletBalance(res)
      }

      fetchBalance(account)
    }
  }, [provider, account])

  return walletBalance
}
