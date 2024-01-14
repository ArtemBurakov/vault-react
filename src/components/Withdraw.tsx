import { useWeb3React } from '@web3-react/core'
import { Button, Card } from 'react-bootstrap'

interface WithdrawProps {
  owner?: string
  withdraw: () => void
  withdrawOwnerIncome: () => void
}

export default function Withdraw({
  owner,
  withdraw,
  withdrawOwnerIncome,
}: WithdrawProps) {
  const { account } = useWeb3React()

  return (
    <Card>
      <Card.Body>
        <Card.Title>Withdraw</Card.Title>
        <div className="mb-3">
          <Button variant="dark" size="sm" onClick={withdraw}>
            Withdrawal
          </Button>
          {owner === account && (
            <Button
              variant="dark"
              size="sm"
              onClick={withdrawOwnerIncome}
              style={{ marginLeft: '8px' }}
            >
              Get Income
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
