import React from "react";
import LoginView from "./view";
import * as Yup from "yup";
import { useFormik } from "formik";

const Login = () => {
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Informe um email válido")
        .required("O campo é obrigatório"),
      password: Yup.string().required("O campo é obrigatório"),
      remember: Yup.boolean(),
    }),
    onSubmit: (values) => console.log(values),
  });

  return <LoginView validation={validation} />;
};

export default Login;
