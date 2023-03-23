import { Outlet } from "react-router-dom";
import AppProvider from "../hooks";

const Providers = () => {
  return (
    <div>
      <AppProvider>
        <Outlet />
      </AppProvider>
    </div>
  );
};

export default Providers;
