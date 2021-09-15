import { FormBox, FormPage } from "../../components/FormBox";
import { Input } from "../../components/Input";
import { IoIosLock, IoMdMail } from "react-icons/io";
import FormButton from "../../components/FormButton";
import loginImg from "../../assets/login.png";
import { Link, useHistory, Redirect } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {} from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../services";
import { Menu } from "../../components/Menu";

interface IRegisterForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
    await api
      .post("auth/login", data)
      .then((response: any) => {
        toast.success("Bem vindx!");
        localStorage.setItem(
          "@yumi:token",
          JSON.stringify(response.data.token)
        );
        localStorage.setItem(
          "@yumi:id",
          JSON.stringify(response.data.user._id)
        );
        history.push("/cart");
      })
      .catch(() => {
        toast.error("Ops, algo de errado aconteceu!");
      });
  };

  // toast.promise(onSubmit: SubmitHandler<IRegisterForm>, {
  //   loading: "Carregando",
  //   success: "Bem vindo",
  //   error: "Ops, algo de errado aconteceu!",
  // });
  const token = localStorage.getItem("@yumi:token");

  if (token !== null) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Menu />
      <FormPage>
        <FormBox className="form">
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              icon={IoMdMail}
              placeholder="E-mail"
              register={register("email")}
              error={errors.email}
            />
            <span className="error-message">{errors.email?.message}</span>

            <Input
              icon={IoIosLock}
              placeholder="Senha"
              register={register("password")}
              type="password"
              error={errors.password}
            />
            <span className="error-message">{errors.password?.message}</span>

            <span>
              Não possui uma conta? <Link to="/register">Cadastre-se</Link>
            </span>
            <FormButton type="submit">Entrar</FormButton>
          </form>
        </FormBox>
        <aside className="illustration login-illustration">
          <img src={loginImg} alt="imagem" />
        </aside>
      </FormPage>
    </>
  );
};

export default LoginPage;
