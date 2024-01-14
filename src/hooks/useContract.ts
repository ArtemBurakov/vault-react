import { isAddress } from 'ethers/lib/utils'
import { Provider } from '@ethersproject/providers'
import { AddressZero } from '@ethersproject/constants'
import { Contract, ContractInterface, Signer } from 'ethers'

import { useProvider } from './useProvider'

function getContract<T = Contract>(
  address: string,
  abi: ContractInterface,
  provider: Signer | Provider
) {
  return <T>(<unknown>new Contract(address, abi, provider))
}

export function useContract<Contract>(address: string, abi: ContractInterface) {
  const { provider, signer } = useProvider()
  const signerOrProvider = signer ?? provider

  if (!isAddress(address) || address === AddressZero) {
    console.error(`Invalid 'address' parameter '${address}'.`)
  }

  const contract = signerOrProvider
    ? () => getContract<Contract>(address, abi, signerOrProvider)
    : undefined

  return contract
}
