import { http } from "../../../http/http";
import { LoginRequestModel } from "../models/LoginRequestModel";
import useNotify from "../../../hook/notify/useNotify";
import { useAppDispatch } from "../../../hook/redux/useRedux";
import { LoginResponseModel } from "../models/LoginResponseModel";
import { loadAuth } from "../../../store/slices/auth/authSlice";

interface IProps {}

interface IUseLogin {
  login: (data: LoginRequestModel) => void;
}

const LOGIN_V1 = import.meta.env.VITE_API_LOGIN_V2;
const LOGIN_ENDPOINT = import.meta.env.VITE_API_LOGIN_ENDPOINT;

const useLogin = ({}: IProps): IUseLogin => {
  const dispatch = useAppDispatch();
  const { notify } = useNotify();

  const login = async (data: LoginRequestModel) => {
    await http
      .post(`${LOGIN_V1}/${LOGIN_ENDPOINT}`, data)
      .then(({ data }: { data: LoginResponseModel }) => {
        dispatch(loadAuth(data));
        notify(
          "Usuário autenticado com sucesso! Você será redirecionado para a página inicial.",
          "success",
        );
      })
      .catch((err) => {
        notify(
          err?.response?.data?.message ||
            "Ocorreu um erro inesperado ao tentar realizar o login. Por favor, tente novamente mais tarde.",
          "error",
        );
      });
  };

  return { login };
};

export default useLogin;
