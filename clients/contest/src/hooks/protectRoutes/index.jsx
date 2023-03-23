import { Outlet, Navigate } from "react-router-dom";

export const ProtectRoutes = () => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "dfdfdf";
  return user ? <Outlet /> : <Navigate to="/" exact />;
};
