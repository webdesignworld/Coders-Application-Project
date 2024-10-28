import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import AuthNavbar from "../components/AuthNavbar";
import { useState } from "react";

const MainLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
     <>
   <AuthNavbar/> 
   {isAuthenticated && <Navbar />}
      <Outlet />
    </>
  );
};

export default MainLayout;

