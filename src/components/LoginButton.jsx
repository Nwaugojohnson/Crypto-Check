import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated) return null;

  return (
    <div>
      <button
        onClick={() => loginWithRedirect()}
        className="text-center px-6 py-2 font-medium text-gray-900 hover:bg-orange-400 hover:text-white cursor-pointer"
      >
        LogIn
      </button>
    </div>
  );
};

export default LoginButton;
