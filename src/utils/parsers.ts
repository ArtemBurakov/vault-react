import { BigNumber } from 'ethers'
import { formatUnits } from 'ethers/lib/utils'

export function parseBigNumberToFloat(value: BigNumber, decimals = 18) {
  if (!value) return 0

  return parseFloat(formatUnits(value, decimals))
}

export function parseTransactionErrorMessage(error: any) {
  if (error?.message.includes('rejected')) {
    return 'Transaction rejected by user'
  } else if (error?.message.includes('revert')) {
    return `${error.error.message}`
  } else {
    return 'Transaction failed'
  }
}
