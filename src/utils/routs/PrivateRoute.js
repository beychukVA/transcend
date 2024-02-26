import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../../redux/Auth/auth-selectors";

export default function PrivateRoute({ redirectTo }) {
  const token = useSelector(getToken);
  return token ? <Outlet /> : <Navigate to={redirectTo} replace />;
}
