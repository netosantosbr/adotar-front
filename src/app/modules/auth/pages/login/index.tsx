import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import usePageTitle from "../../../../hook/pageTitle";
import useLogin from "../../hook/useLogin";
import { LoginRequestModel } from "../../models/LoginRequestModel";
import LoginView from "./view";

const Login = () => {
  usePageTitle({ title: "Login" });
  const { login } = useLogin({});

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Informe um email válido")
        .required("O campo é obrigatório"),
      password: Yup.string()
        .min(6, "A senha deve conter no minimo 6 caracteres")
        .required("O campo é obrigatório"),
      remember: Yup.boolean(),
    }),
    onSubmit: (values) => {
      const valuesToSubmit: LoginRequestModel = {
        email: values.email,
        password: values.password,
      };

      login(valuesToSubmit);
    },
  });

  return <LoginView validation={validation} />;
};

export default Login;
