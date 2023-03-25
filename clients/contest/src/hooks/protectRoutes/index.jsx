import { Outlet, Navigate } from "react-router-dom";

export const ProtectRoutes = () => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "/login";
  return user ? <Outlet /> : <Navigate to="/login" exact />;
};
