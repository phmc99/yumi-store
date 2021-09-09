import { FormBox, FormPage } from "../../components/FormBox";
import { Input } from "../../components/Input";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { IoIosLock, IoMdMail } from "react-icons/io";
import FormButton from "../../components/FormButton";
import registerImg from "../../assets/register.png";
import { Link, useHistory, Redirect } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {} from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../services";
import { Menu } from "../../components/Menu";

interface IRegisterForm {
  name: string;
  cpf: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/,
        "Nome deve conter apenas letras."
      )
      .max(50, "Nome deve conter no máximo 50 caracteres."),
    cpf: yup.string().required("Campo obrigatório"),
    phone: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), null], "As senhas não são iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
    await api
      .post("register", data)
      .then(() => {
        toast.success("Cadastro concluído!");
        history.push("/login");
      })
      .catch(() => {
        toast.error("Ops, algo de errado aconteceu!");
      });
  };

  const token = localStorage.getItem("token")

  if (token !== null) {
    return <Redirect to="/" />
  }

  return (
    <>
      <Menu />
      <FormPage>
        <FormBox className="form">
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              icon={BsFillPersonFill}
              placeholder="Nome"
              register={register("name")}
              error={errors.name}
            />
            <span className="error-message">{errors.name?.message}</span>
            <Input
              icon={BsFillPersonFill}
              placeholder="CPF"
              register={register("cpf")}
              error={errors.cpf}
            />
            <span className="error-message">{errors.cpf?.message}</span>

            <Input
              icon={IoMdMail}
              placeholder="E-mail"
              register={register("email")}
              error={errors.email}
            />
            <span className="error-message">{errors.email?.message}</span>

            <Input
              icon={AiFillPhone}
              placeholder="Telefone"
              register={register("phone")}
              error={errors.phone}
            />
            <span className="error-message">{errors.phone?.message}</span>

            <Input
              icon={IoIosLock}
              placeholder="Senha"
              register={register("password")}
              type="password"
              error={errors.password}
            />
            <span className="error-message">{errors.password?.message}</span>

            <Input
              icon={IoIosLock}
              placeholder="Confirmar senha"
              register={register("confirmPassword")}
              type="password"
              error={errors.confirmPassword}
            />
            <span className="error-message">
              {errors.confirmPassword?.message}
            </span>

            <span>
              Já possui uma conta? <Link to="/login">Login</Link>
            </span>
            <FormButton type="submit">Cadastrar</FormButton>
          </form>
        </FormBox>
        <aside className="illustration register-illustration">
          <img src={registerImg} alt="imagem" />
        </aside>
      </FormPage>
    </>
  );
};

export default RegisterPage;
