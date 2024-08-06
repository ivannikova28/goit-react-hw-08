import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "./Layout/Layout.jsx";
import Loader from "../components/Loader/Loader.jsx";
// import Navigation from "../components/Navigation/Navigation.jsx";
import RestrictedRoute from "./RestrictedRoute.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

import { selectIsRefreshing } from "../redux/auth/selectors.js";
import { refreshUser } from "../redux/auth/operations.js";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const ContactPage = lazy(() => import("../pages/ContactsPage/ContactsPage.jsx"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
// const TasksPage = lazy(() => import("../pages/TasksPage/TasksPage"));

import css from "./App.module.css";


export default function App() {
  // const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      {/* <Navigation /> */}

      {isRefreshing && <Loader />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index={true} path="/" element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute component={<RegisterPage />} redirectTo={"/contacts"} />} />
          <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo={"/contacts"} />} />
          <Route path="/contacts" element={<PrivateRoute component={<ContactPage />} redirectTo="/login" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
