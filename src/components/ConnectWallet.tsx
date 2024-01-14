import { useCallback } from 'react'

import { toast } from 'sonner'
import Button from 'react-bootstrap/Button'

import { hooks as metaMaskHooks, metaMask } from '../connectors/metaMask'

const { useIsActivating } = metaMaskHooks

const ConnectWallet = () => {
  const isMetaMaskActivating = useIsActivating()

  const activateConnector = useCallback(async (walletType: string) => {
    try {
      // switch is used for handling different wallets
      // adding wallet can be done by modifying connectors
      switch (walletType) {
        case 'MetaMask':
          await metaMask.activate()
          break

        default:
          await metaMask.activate()
          break
      }
    } catch (error) {
      toast.error('Failed to connect wallet.')
    }
  }, [])

  return (
    <Button variant="primary" onClick={() => activateConnector('MetaMask')}>
      {isMetaMaskActivating ? 'Connecting...' : 'Connect Wallet'}
    </Button>
  )
}

export default ConnectWallet
