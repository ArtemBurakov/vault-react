import { useWeb3React } from '@web3-react/core'

import { Toaster } from 'sonner'
import { Container } from 'react-bootstrap'

import Vault from './components/Vault'
import ConnectWallet from './components/ConnectWallet'

function App() {
  const { account, isActive } = useWeb3React()

  return (
    <div className="App">
      <Container className="my-4">
        <Toaster richColors closeButton />
        {account && isActive ? <Vault /> : <ConnectWallet />}
      </Container>
    </div>
  )
}

export default App
