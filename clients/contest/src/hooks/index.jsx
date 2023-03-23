import { CurrentUserProvide } from "./auth";

const AppProvider = ({ children }) => (
  <CurrentUserProvide>{children}</CurrentUserProvide>
);

export default AppProvider;
