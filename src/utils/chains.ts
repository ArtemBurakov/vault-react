import chainsData from './chains.json'

export const getChainSymbol = (chainId: any) => {
  const matchingChain = chainsData.find(
    (chain: any) => chain?.chainId === chainId
  )

  return matchingChain ? matchingChain.nativeCurrency.symbol : ''
}
