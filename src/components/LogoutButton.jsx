import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    if (!isAuthenticated) return null;

  return (
       <div>
       <button onClick={()=>  logout({ logoutButtonParams: { returnTo: `http://localhost:5173`}})} className="cursor-pointer">
        Logout
       </button>
    </div>
    )
}

export default LogoutButton;
