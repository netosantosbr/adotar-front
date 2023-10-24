import React from "react";
import usePageTitle from "../../../../hook/pageTitle";
import RegisterView from "./view";

interface IProps {}

const Register: React.FC<IProps> = () => {
  usePageTitle({ title: "Cadastro" });

  return <RegisterView />;
};

export default Register;
