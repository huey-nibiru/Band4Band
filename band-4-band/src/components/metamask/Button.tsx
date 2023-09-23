// src/components/ConnectButton.tsx
import React, { useState, useEffect } from 'react';
import './Button.css';
import Web3 from 'web3';

const ConnectButton: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [userAddress, setUserAddress] = useState<string | null>(null);

  const connectToMetamask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    }
  };

  useEffect(() => {
    if (isConnected) {
      const web3 = new Web3(window.ethereum);
      web3.eth.getAccounts().then((accounts) => {
        setUserAddress(accounts[0]);
      });
    } else {
      setUserAddress(null);
    }
  }, [isConnected]);

  return (
    <div className="connect-button-container">
      <button
        className={`connect-button ${isConnected ? 'connected' : ''}`}
        onClick={isConnected ? undefined : connectToMetamask}
      >
        {isConnected ? 'Connected' : 'Connect to Metamask'}
      </button>
      {userAddress && (
        <div className="user-address">
          {userAddress}
        </div>
      )}
    </div>
  );
};

export default ConnectButton;
