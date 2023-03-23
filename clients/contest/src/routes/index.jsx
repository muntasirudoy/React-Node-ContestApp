import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Error from "../components/error";
import Providers from "../components/Providers";
import { ProtectRoutes } from "../hooks/protectRoutes";
import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Resigtration";
import Clients from "../pages/Clients";
import Landing from "../pages/landing";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Error />} path="/" element={<Providers />}>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/clients" element={<ProtectRoutes />}>
        <Route index element={<Clients />} />
      </Route>
    </Route>
  )
);
