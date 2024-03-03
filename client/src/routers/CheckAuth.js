import Cookies from "js-cookie";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const CheckAuth = () => {
  const token = Cookies.get("token");
  return <>{token ? <Outlet /> : <Navigate to="/" />}</>;
};

export default CheckAuth;
