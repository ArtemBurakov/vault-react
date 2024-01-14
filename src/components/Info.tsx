import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'

import { getChainSymbol } from '../utils/chains'

interface InfoProps {
  account?: string
  chainId?: number
  balance?: string
}

export default function Info({ account, chainId, balance }: InfoProps) {
  const [currencySymbol, setCurrencySymbol] = useState('')

  useEffect(() => {
    if (chainId) {
      const symbol = getChainSymbol(chainId)
      setCurrencySymbol(symbol)
    }
  }, [chainId])

  return (
    <Card>
      <Card.Body>
        <Card.Title>✅ Connected to Vault</Card.Title>
        <Card.Text className="mb-0">
          👤 Account: {account !== undefined ? account : 'No Account Detected'}
        </Card.Text>
        <Card.Text>
          💳 Balance: {balance !== undefined ? balance : '0.0'} {currencySymbol}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
