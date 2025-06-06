import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import RootLayout from "./layout/RootLayout";
import NotFound from "./components/NotFound";
import DashBoard from "./layout/DashBoard";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Footer from "./components/Footer";
import PromoBanner from "./components/PromoBanner";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="dashboard" element={<DashBoard />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <main className="Poppins bg-gradient-to-r from-blue-950 to-blue-700 w-full ">
      <RouterProvider router={router} />
      {/* <Hero /> */}

      {/* <LogoutButton /> */}
      <Footer />
    </main>
  );
};

export default App;
