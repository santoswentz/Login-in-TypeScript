import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({
  title,
  loading,
  disabled,
  ...rest
}: IButtonProps) => {
  return (
    <ButtonContainer disabled={disabled || loading} {...rest}>
      {loading ? "Carregando..." : title}
    </ButtonContainer>
  );
};

export default Button;
