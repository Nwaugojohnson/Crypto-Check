// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import CoinContextProvider from './Context/CoinContext.jsx';
 

   const domain = import.meta.env.VITE_AUTH0_DOMAIN;
   const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

createRoot(document.getElementById('root')).render(
   
   <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{redirect_uri: window.location.origin}}>
    <CoinContextProvider>
    <App />
    </CoinContextProvider>
    </Auth0Provider>
    
)
