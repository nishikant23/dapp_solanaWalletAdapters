import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import './App.css'
import { Airdrop } from './components/Airdrop';
import { ShowBalance } from './components/ShowBalance';




function App() {
  
 
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/rJdaJvr-oPfQq9tnneRX_KtyUYNnUmzJ"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className='flex justify-between px-5 py-3'>
            <WalletMultiButton />
            <div className='flex justify-between'>
              <ShowBalance />
              <WalletDisconnectButton/>
            </div>
          </div>
          <Airdrop/>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
    
  )
}

export default App
