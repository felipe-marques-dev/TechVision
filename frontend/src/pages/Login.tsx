import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { client } from "../services/client";
import { Logo } from "../components/Logo";
import { Container, Form, Spinner } from "react-bootstrap";
import '../styles/loginECadastro.css';


export function Login() {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Alterar a tag title da pagina
    document.title = 'Login';
    // fazer a requisicao para 
    //ver o status de sessao 
    // do usuario
    client.get("/accounts/usuario")
      .then(function (res) {
        setCurrentUser(true);
      })
      .catch(function (error) {
        setCurrentUser(false);
      })
  }, []);

  // Funcionalidade para trocar de página
  function onClick_form_btn() {
    return navigate('/cadastro');
  }

  // Função para enviar os dados para realizar o login
  function submitLogin(e: { currentTarget: any; stopPropagation(): unknown; preventDefault: () => void; }) {
    // Impede que a página recarregue automáticamente
    e.preventDefault();
    setIsLoading(true);

    if (email === "" || password.length < 8) {
      e.stopPropagation();
      return setIsLoading(false);
    }

    // Define um intervalo de tempo para a função responder
    setTimeout(() => {
      // Envia requisição para o servidor 
      client.post(
        "accounts/login",
        {
          email: email,
          password: password,
        }
      ).then(function (res) {
        setCurrentUser(true);
        setValid(true);
        setIsLoading(false);
      }).catch(function (error) {
        setCurrentUser(false);
        setValid(false);
        setIsLoading(false);
      });
    }, 1500);

  }

  if (currentUser) {
    return navigate('/profile');
  }

  return (
    <div>
      <div className="d-flex position-relative justify-content-center align-bottom p-4">
        <Logo />
      </div>
      <Container fluid id="containerFluid" className="mb-auto rounded-4 position-relative bg-white p-4 border-5 border-black">
        <h1 className="d-flex justify-content-center" id="title">Login</h1>
        <Form id="login-form" method="post" onSubmit={e => submitLogin(e)} noValidate>
          <Form.Group className="mb-3" id="email">
            <Form.Label htmlFor="inputEmail">Email</Form.Label><br />
            <Form.Control
              type="email"
              name="email"
              id="inputEmail"
              className="border-3 rounded-3"
              onChange={e => setEmail(e.target.value)}
              required
              isInvalid={email === "" || !(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email)) || !valid}
            />
            {!valid ? (<Form.Control.Feedback type="invalid"><b>Senha ou Email inválidos</b></Form.Control.Feedback>) :
              (<Form.Control.Feedback type="invalid">
                <b>Email Inválido</b>
              </Form.Control.Feedback>)}
          </Form.Group>
          <Form.Group className="mb-3" id="password" >
            <Form.Label htmlFor="inputPassword">Senha</Form.Label><br />
            <Form.Control
              type="password"
              name="password"
              id="inputPassword"
              className="border-3 rounded-3"
              onChange={e => setPassword(e.target.value)}
              required
              isInvalid={password.length < 8 || !valid}
            />
            {!valid ? (<Form.Control.Feedback type="invalid"><b>Senha ou Email inválidos</b></Form.Control.Feedback>) :
              (<Form.Control.Feedback type="invalid">
                <b>Senha Inválida</b>
              </Form.Control.Feedback>)}
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button
              type="submit"
              className="btn btn-dark rounded-3 w-100"
              disabled={isLoading || password.length < 8 || email === "" || !(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email))}>
              {isLoading ? (<Spinner animation="border" />) : (<p className="m-0">Enviar</p>)}
            </Button>
          </div>
          <br />
          <a href="/esqueci_minha_senha" className="text-primary d-flex justify-content-center" id="link">Esqueceu sua senha?</a>
        </Form>
      </Container>
      <br />
      <div id="containerFluid" className="container-fluid position-relative p-0" >
        <div className="d-flex justify-content-center p-0 m-0">
          <div className="border-top mt-2 me-1" id="divisorLogin"></div>
          <p> Não possui uma conta? </p>
          <div className="border-top mt-2 ms-1" id="divisorLogin"></div>
        </div>

        <div className="col-12 d-flex justify-content-center">
          <Button id="navigateToRegisterBtn" className="formBtn bg-white w-100 rounded-3" onClick={onClick_form_btn} variant="light">Criar conta</Button>
        </div>
      </div>

    </div>
  );
}