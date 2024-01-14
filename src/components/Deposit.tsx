import { useState } from 'react'
import { useWeb3React } from '@web3-react/core'

import { toast } from 'sonner'
import { Button, Form, InputGroup, Card } from 'react-bootstrap'

import { parseBigNumberToFloat } from '../utils/parsers'
import { useNativeBalance } from '../hooks/useNativeBalance'

const FORM_INPUT_PATTERN = '^-?[0-9]d*.?d*$'
const MIN_DEPOSIT_AMOUNT = process.env.REACT_APP_MIN_DEPOSIT_AMOUNT
const DEFAULT_DEPOSIT_AMOUNT = process.env.REACT_APP_DEFAULT_DEPOSIT_AMOUNT

interface DepositProps {
  deposit: (amount: number) => void
}

export default function Deposit({ deposit }: DepositProps) {
  const { provider, account } = useWeb3React()
  const walletBalance: any = useNativeBalance(provider, account)

  const [depositAmount, setDepositAmount] = useState<string>(
    // @ts-ignore
    DEFAULT_DEPOSIT_AMOUNT
  )

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount)

    if (isNaN(amount) || amount <= 0) {
      toast.error('Please enter a valid deposit amount')
      return
    }

    if (walletBalance && amount > parseBigNumberToFloat(walletBalance)) {
      toast.error('Insufficient balance')
      return
    }

    deposit(amount)
    // @ts-ignore
    setDepositAmount(DEFAULT_DEPOSIT_AMOUNT)
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Deposit</Card.Title>
        <InputGroup className="mb-3">
          <Form.Control
            size="sm"
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            placeholder="Amount to deposit"
            step="0.005"
            min={MIN_DEPOSIT_AMOUNT}
            max={
              walletBalance
                ? parseBigNumberToFloat(walletBalance)
                : MIN_DEPOSIT_AMOUNT
            }
            pattern={FORM_INPUT_PATTERN}
          />
          <Button variant="dark" size="sm" onClick={handleDeposit}>
            Deposit
          </Button>
        </InputGroup>
      </Card.Body>
    </Card>
  )
}
