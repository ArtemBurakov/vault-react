import { useMemo } from 'react'
import type { Signer } from 'ethers'
import { useWeb3React } from '@web3-react/core'
import type { Provider } from '@ethersproject/providers'

interface useProviderProps {
  provider: Provider | undefined
  signer: Signer | undefined
}

export const useProvider = (): useProviderProps => {
  const { provider, account } = useWeb3React()

  return useMemo(() => {
    let signer

    if (provider?.getSigner) {
      signer = provider.getSigner(account)
    }

    return { provider, signer }
  }, [account, provider])
}
