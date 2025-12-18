import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup"; // serve para integrar o yup com o react-hook-form
import * as yup from "yup";
import { api } from   "../../services/api"

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";
import { useEffect, useState } from "react";

interface UserData { 
    email: string
    nome: string
    password: string
}

const schema = yup
  .object({
    email: yup.string().email("Revise o seu E-mail!").required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "No minimo 3 caracteres")
      .required("Campo obrigatório"),
  })
  .required();


const Login = () => {

  const [ UserData, setUserData ] = useState<null | UserData>()

  useEffect(() => { 
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }

    getData() 
  })

  console.log(UserData)
  console.log("pode dar ruim em usar null e mais um type")


  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: IFormLogin) => {
    console.log("Login:", data);
  };

  return (
    <Container>
      <LoginContainer>
        <Column as="form" onSubmit={handleSubmit(onSubmit)}>
          <Title>Login</Title> 
          <Title>{UserData?.nome}</Title> 
          <Spacing />

          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message}
          />

          <Spacing />

          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />

          <Spacing />

          <Button
            title="Entrar"
            type="submit"
            disabled={!isValid}
            loading={isSubmitting}
          />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;
