import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledFormButton } from "./style";

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const FormButton = ({ children, ...rest }: FormButtonProps) => {
  return <StyledFormButton {...rest}>{children}</StyledFormButton>;
};

export default FormButton;
