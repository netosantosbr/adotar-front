import React from "react";
import LoginView from "./view";
import * as Yup from "yup";
import { useFormik } from "formik";
import useLogin from "../../hook/useLogin";
import { LoginRequestModel } from "../../models/LoginRequestModel";
// import { useAppSelector } from "../../../../hook/redux/useRedux";

const Login = () => {
  // const { user } = useAppSelector((state) => state.auth);
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
