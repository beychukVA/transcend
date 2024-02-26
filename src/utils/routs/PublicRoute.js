import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../../redux/Auth/auth-selectors";

export default function PublicRoute({ redirectTo = "/", restricted = false }) {
  const token = useSelector(getToken);
  const shouldRedirect = token && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : <Outlet />;
}
