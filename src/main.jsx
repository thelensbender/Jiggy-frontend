import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { WalletProvider } from "./Context/WalletContext";
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <WalletProvider>
         <App />
      </WalletProvider>
    </BrowserRouter>
  </StrictMode>
);