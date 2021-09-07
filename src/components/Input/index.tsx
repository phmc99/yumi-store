import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { Container, ContentInput } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: IconType;
  error: any;
  register: any;
}

export const Input = ({ icon: Icon, register, error, ...rest }: InputProps) => {
  return (
    <Container>
      <ContentInput error={error ? true : false}>
        {Icon && <Icon />}
        <input autoComplete="off" {...rest} {...register} />
      </ContentInput>
    </Container>
  );
};
