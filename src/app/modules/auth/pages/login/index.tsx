import React from "react";
import LoginView from "./view";
import * as Yup from "yup";
import { useFormik } from "formik";

const Login = () => {
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      usernameOrEmail: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      usernameOrEmail: Yup.string()
        .email("Informe um email válido")
        .required("O campo é obrigatório"),
      password: Yup.string().required("O campo é obrigatório"),
    }),
    onSubmit: (values) => console.log(values),
  });

  return <LoginView />;
};

export default Login;
