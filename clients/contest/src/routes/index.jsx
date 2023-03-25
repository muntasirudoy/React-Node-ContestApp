import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Error from "../components/error";
import NewComponent from "../components/NewComponent";
import Providers from "../components/Providers";
import { ProtectRoutes } from "../hooks/protectRoutes";
import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Resigtration";
import Clients from "../pages/Clients";
import ClientsSingleContest from "../pages/Clients/ClientsSingleContest";
import Freelancer from "../pages/Freelancer";
import Landing from "../pages/landing";
import ParticipateContest from "../pages/landing/ParticipateContest";
import SinglePublicContest from "../pages/landing/SinglePublicContest";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Error />} path="/" element={<Providers />}>
      <Route path="/" element={<Landing />} />
      <Route path="/contest/:id" element={<SinglePublicContest />} />
      <Route path="/contest/:id/participate" element={<ParticipateContest />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/clients" element={<ProtectRoutes />}>
        <Route index element={<Clients />} />
        <Route path="/clients/contest/:id" element={<ClientsSingleContest />} />
      </Route>
       <Route path="/freelancer" element={<Freelancer />} /> 
    </Route>
  )
);
