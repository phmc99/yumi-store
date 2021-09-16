import { FormBoxLogin, FormPage, Load } from "../../components/FormBox";
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
import { useProfile } from "../../providers/Profile";
import { useState } from "react";
import { FadeLoader } from "react-spinners";

interface IRegisterForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const history = useHistory();
  const { setUserInfo } = useProfile();

  const [loading, setLoading] = useState<boolean>(false);

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
    setLoading(true);
    await api
      .post("auth/login", data)
      .then((response: any) => {
        setLoading(false);
        toast.success("Bem vindx!");
        localStorage.setItem(
          "@yumi:token",
          JSON.stringify(response.data.token)
        );
        localStorage.setItem(
          "@yumi:id",
          JSON.stringify(response.data.user._id)
        );
        setUserInfo(response.data.user);
        history.push("/");
      })
      .catch(() => {
        setLoading(false);
        toast.error("Ops, algo de errado aconteceu!");
      });
  };

  const token = localStorage.getItem("@yumi:token");

  if (token !== null) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Menu />
      <FormPage>
        <FormBoxLogin className="form">
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
        </FormBoxLogin>
        <aside className="illustration login-illustration">
          <img src={loginImg} alt="imagem" />
        </aside>
      </FormPage>

      {loading && (
        <Load>
          <div className="spinner">
            <FadeLoader
              loading={loading}
              color="var(--purple)"
              height={30}
              radius={8}
              width={7}
              margin={7}
            />
          </div>
        </Load>
      )}
    </>
  );
};

export default LoginPage;
