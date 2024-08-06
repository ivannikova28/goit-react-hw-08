import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { selectIsLoggedIn } from "../redux/auth/selectors";

export default function PrivateRoute({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { pathname } = useLocation()

  return isLoggedIn ? component : <Navigate to={redirectTo} state={pathname} />;
}
