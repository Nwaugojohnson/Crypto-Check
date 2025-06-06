import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) return null;

  return (
    <div>
      <button
        onClick={() => loginWithRedirect()}
         className="cursor-pointer">
        LogIn
      </button>
    </div>
  );
};

export default LoginButton;
