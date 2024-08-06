import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";

import { logIn } from "../../redux/auth/operations";

import css from "./LoginForm.module.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();

  const navigate = useNavigate()
  const { state } = useLocation()

  const handleSubmit = async (values, actions) => {
    await dispatch(logIn(values)).unwrap()
    // .then(data => console.log(data))
    // .catch(err => console.log(err));

    actions.resetForm();
    navigate(state || "/", { replace: true })
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
