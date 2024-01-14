import { Row, Col } from 'react-bootstrap'
import { useWeb3React } from '@web3-react/core'

import Info from './Info'
import Deposit from './Deposit'
import Withdraw from './Withdraw'
import { useVault } from '../hooks'

export default function Vault() {
  const { account, chainId } = useWeb3React()
  const { owner, balance, deposit, withdraw, withdrawOwnerIncome } =
    useVault(account)

  return (
    <Row className="justify-content-center">
      <Col md={9}>
        <Row className="mb-3">
          <Col md={12}>
            <Info account={account} chainId={chainId} balance={balance} />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Deposit deposit={deposit} />
          </Col>
          <Col md={6} className="mt-3 mt-md-0">
            <Withdraw
              owner={owner}
              withdraw={withdraw}
              withdrawOwnerIncome={withdrawOwnerIncome}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
