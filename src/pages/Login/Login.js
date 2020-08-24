import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/logo_header.png';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {
  Container,
  Form,
  H2,
  FieldsContainer,
  ImageContainer,
  Image,
  ButtonContainer,
  ErrorMessage,
} from './styles';

function Login() {
  const [dadosLogin, setDadosLogin] = useState({ usuario: '', senha: '' });
  const [showError, setShowError] = useState(false);

  const history = useHistory();

  const validateUser = ({ usuario, senha }) => {
    if (dadosLogin.usuario === usuario && dadosLogin.senha === senha)
      history.push('/');
    else
      setShowError(true);
  };

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:3000/mock/login.json')
      .then(r => r.json())
      .then(json => validateUser(json[0]));
  }

  function handleChange(campo, valor) {
    setShowError(false);

    setDadosLogin({ ...dadosLogin, [campo]: valor });
  }

  function validateForm() {
    return dadosLogin.usuario.length > 0 && dadosLogin.senha.length > 0;
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
            value={dadosLogin.usuario}
            autoComplete="off"
            onChange={e => {
              handleChange('usuario', e.target.value);
            }}
          />
          <Input
            type="password"
            label="Senha"
            name="senha"
            value={dadosLogin.senha}
            autoComplete="off"
            onChange={e => {
              handleChange('senha', e.target.value);
            }}
          />
          {showError && <ErrorMessage style={{color: 'red'}}>Dados inválidos.</ErrorMessage>}
          <ButtonContainer>
            <Button disabled={!validateForm()}>Entrar</Button>
          </ButtonContainer>
        </FieldsContainer>
      </Form>
    </Container>
  );
}

export default Login;
