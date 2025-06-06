import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginButton from "./LoginButton";
import { Menu, X, User } from "lucide-react"; // import User icon
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false); // toggle user dropdown

  const handleLogout = () => {
    console.log("Logging out...");
    // Add logout logic here
    setUserMenuOpen(false);
  };

  const { isAuthenticated } = useAuth0();

  return (
    <div className=" bg-gradient-to-r from-blue-950 to-blue-700 text-white">
      <nav className="flex items-center justify-between py-5 px-[10%] z-[1000] relative">
        <h1 className="text-2xl lg:text-2xl font-bold">Crypto Check.</h1>

        {/* Hamburger icon for mobile */}
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl cursor-pointer"
        >
          {open ? <X size={"40"} /> : <Menu size={"40"} />}
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-10 items-center">
          <NavLink to="/">
            <li className="cursor-pointer hover:border-b transition-all">
              Home
            </li>
          </NavLink>
          <NavLink to="/features">
            <li className="cursor-pointer hover:border-b transition-all">
              Features
            </li>
          </NavLink>
          <NavLink to="/pricing">
            <li className="cursor-pointer hover:border-b transition-all">
              Pricing
            </li>
          </NavLink>
          <NavLink to="/blog">
            <li className="cursor-pointer hover:border-b transition-all">
              Blog
            </li>
          </NavLink>
        </ul>

        <div className="hidden md:block">
          {/* <LoginButton /> */}
          {/* User Menu (Desktop) */}
          <div className="relative text-center">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2 cursor-pointer hover:opacity-80"
            >
              <User size={50} className="bg-blue-800 rounded-full p-[0.8rem] " />
              {/* <span className="font-bold text-[1rem]">User</span> */}
            </button>
            {userMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white text-blue-950 shadow-lg rounded-md w-32 z-50">
                <ul className="py-2 text-sm">
                  {!isAuthenticated ? (<li
                    className="px-4 py-2 cursor-pointer"
                    onClick={() => {
                      setUserMenuOpen(false);
                    }}
                  >
                    <LoginButton />
                  </li>) :
                  (<li
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-[10%] pb-4">
          <ul className="flex flex-col gap-4 items-center">
            <NavLink to="/" onClick={() => setOpen(false)}>
              <li className="cursor-pointer hover:border-b font-bold transition-all">
                Home
              </li>
            </NavLink>
            <NavLink to="/features" onClick={() => setOpen(false)}>
              <li className="cursor-pointer hover:border-b-1 transition-all">
                Features
              </li>
            </NavLink>
            <NavLink to="/pricing" onClick={() => setOpen(false)}>
              <li className="cursor-pointer hover:border-b transition-all">
                Pricing
              </li>
            </NavLink>
            <NavLink to="/blog" onClick={() => setOpen(false)}>
              <li className="cursor-pointer hover:border-b transition-all">
                Blog
              </li>
            </NavLink>

            {/* User menu in mobile */}
            <div className="pt-2 text-center">
              <div
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <User size={50}  className="bg-blue-800 rounded-full p-[0.8rem]"/>
                {/* <span>User</span> */}
              </div>
              {userMenuOpen && (
                <ul className="mt-2 bg-white text-blue-950 rounded-md shadow-md">
                  <li
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={() => {
                      setUserMenuOpen(false);
                      navigate("/login");
                    }}
                  >
                    Login
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              )}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
