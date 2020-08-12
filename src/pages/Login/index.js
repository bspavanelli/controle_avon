import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/logo_header.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  Container,
  Form,
  H2,
  FieldsContainer,
  ImageContainer,
  Image,
  ButtonContainer,
} from './styles';

function Login() {
  const [usuario, setUsuario] = useState(' ');
  const [senha, setSenha] = useState(' ');

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    if (usuario === '120.190.550-82' && senha === 'Qwe123?!') {
      history.push('/');
    }
  }

  function validateForm() {
    return usuario.length > 0 && senha.length > 0;
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <ImageContainer>
          <Image src={Logo} alt="logo" />
        </ImageContainer>
        <H2>Para acessar o sistema, preencha seu usuário e senha</H2>
        <FieldsContainer>
          <Input
            type="text"
            label="Usuário"
            name="usuario"
            value={usuario}
            onChange={e => {
              setUsuario(e.target.value);
            }}
          />
          <Input
            type="password"
            label="Senha"
            name="senha"
            value={senha}
            onChange={e => {
              setSenha(e.target.value);
            }}
          />
          <ButtonContainer>
            <Button disabled={!validateForm()}>Entrar</Button>
          </ButtonContainer>
        </FieldsContainer>
      </Form>
    </Container>
  );
}

export default Login;
