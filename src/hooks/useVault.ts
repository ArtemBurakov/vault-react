import { useEffect, useCallback, useState } from 'react'
import { ethers } from 'ethers'

import { toast } from 'sonner'

import { useContract } from './useContract'
import { Vault } from '../contract/abi/types'
import VaultAbi from '../contract/abi/Vault.json'
import { parseTransactionErrorMessage } from '../utils/parsers'

const VAULT_ADDRESS = process.env.REACT_APP_VAULT_CONTRACT_ADDRESS

const handleTransaction = async (
  action: string,
  transaction: () => Promise<any>
) => {
  toast.promise(transaction, {
    loading: `${action}: pending...`,
    success: () => `${action}: completed!`,
    error: (error) => parseTransactionErrorMessage(error),
  })
}

export const useVault = (selectedAccount?: string) => {
  const [owner, setOwner] = useState<string | undefined>(undefined)
  const [balance, setBalance] = useState<string | undefined>(undefined)
  const [transactionPending, setTransactionPending] = useState<boolean>(false)

  // @ts-ignore
  const contract = useContract<Vault>(VAULT_ADDRESS, VaultAbi)

  useEffect(() => {
    if (!contract || !selectedAccount) return

    getOwner()
    getBalance()
  }, [selectedAccount])

  useEffect(() => {
    // get balance after making deposit/withdrawal transactions
    if (!transactionPending && selectedAccount) getBalance()
  }, [selectedAccount, transactionPending])

  const getOwner = useCallback(async () => {
    if (!contract || !selectedAccount || owner !== undefined) return

    setOwner(await contract().owner())
  }, [selectedAccount])

  const getBalance = useCallback(async () => {
    if (!contract || !selectedAccount) return

    const rawBalance = await contract().balances(selectedAccount)
    const formattedBalance = ethers.utils.formatEther(rawBalance)
    setBalance(formattedBalance)
  }, [selectedAccount])

  const deposit = useCallback(
    (amount: number) => {
      if (!contract || !selectedAccount) return

      handleTransaction('Deposit', async () => {
        setTransactionPending(true)
        const transaction = await contract().deposit({
          value: ethers.utils.parseEther(amount.toString()),
        })
        await transaction.wait()
        setTransactionPending(false)
      })
    },
    [selectedAccount]
  )

  const withdraw = useCallback(() => {
    if (!contract || !selectedAccount) return

    handleTransaction('Withdraw', async () => {
      setTransactionPending(true)
      const transaction = await contract().withdraw()
      await transaction.wait()
      setTransactionPending(false)
    })
  }, [selectedAccount])

  const withdrawOwnerIncome = useCallback(() => {
    if (!contract || !selectedAccount) return

    handleTransaction('Withdraw Owner Income', async () => {
      await contract().withdrawOwnerIncome()
    })
  }, [selectedAccount])

  return {
    owner,
    balance,
    deposit,
    withdraw,
    withdrawOwnerIncome,
  }
}
