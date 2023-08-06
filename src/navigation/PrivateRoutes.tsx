import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes(): JSX.Element {
  const token = sessionStorage.getItem("token");
  if (token) return <Outlet />;
  return <Navigate to={"/"} />;
}
