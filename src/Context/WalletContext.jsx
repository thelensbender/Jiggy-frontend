import { createContext, useContext, useState, useEffect } from "react";
import { BrowserProvider } from "ethers";

// 1. Create the notice board
const WalletContext = createContext({
  walletAddress: null,
  shortAddress: null,
  isConnecting: false,
  provider: null,
  connectWallet: () => {},
  disconnectWallet: () => {}
});

// 2. The Provider — wraps your app so every component can read the board
export function WalletProvider({ children }) {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [provider, setProvider] = useState(null);

  // Auto-reconnect if user already approved the site before
  useEffect(() => {
   const autoConnect = async () => {
      if (!window.ethereum) return;
      try {
         const browserProvider = new BrowserProvider(window.ethereum);
         const accounts = await browserProvider.listAccounts();
         if (accounts.length > 0) {
         setWalletAddress(accounts[0].address);
         setProvider(browserProvider);
         }
      } catch (error) {
         console.log("Auto-connect skipped");
      }
   };

   autoConnect();
   }, []);

  // Connect wallet function
  const connectWallet = async () => {
    // Check if MetaMask is installed
    if (!window.ethereum) {
      alert("MetaMask not found. Please install it from metamask.io");
      return;
    }

    try {
      setIsConnecting(true);

      // Ask MetaMask to open and request access
      const browserProvider = new BrowserProvider(window.ethereum);
      await browserProvider.send("wallet_requestPermissions", [{ eth_accounts: {} }]);
      await browserProvider.send("eth_requestAccounts", []);
      const signer = await browserProvider.getSigner();

      setWalletAddress(signer.address);
      setProvider(browserProvider);
    } catch (_error) {
      // User rejected the connection
      console.error("Wallet connection failed:", _error);
      alert("Connection rejected.");
    } finally {
      setIsConnecting(false);
    }
  };

  // Disconnect wallet function
  const disconnectWallet = () => {
    setWalletAddress(null);
    setProvider(null);
  };

  // Helper to shorten address for display e.g. 0x1234...abcd
  const shortAddress = walletAddress
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : null;

  return (
    <WalletContext.Provider
      value={{
        walletAddress,
        shortAddress,
        isConnecting,
        provider,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

// 3. The hook — how any component reads from the board
export function useWallet() {
  return useContext(WalletContext);
}