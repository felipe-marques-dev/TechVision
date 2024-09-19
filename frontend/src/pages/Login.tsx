import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { client } from "../services/client";
import { Logo } from "../components/Logo";
import { Form } from "react-bootstrap";

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
  function submitLogin(e: {currentTarget: any; stopPropagation(): unknown; preventDefault: () => void;}) {
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
      <div className="d-flex position-relative justify-content-center align-bottom p-5">
        <Logo />
      </div>
      <div className="container-fluid mb-auto rounded-4 w-25 position-relative bg-white p-4 border-5 border-black" style={{ borderRadius: '20px', minWidth: "300px" }}>
        <h1 className="d-flex justify-content-center" id="title">Login</h1>
        <Form id="login-form" method="post" onSubmit={e => submitLogin(e)} noValidate>
          <Form.Group className="mb-3" id="email">
            <Form.Label htmlFor="inputEmail">Email</Form.Label><br />
            <Form.Control
              type="email"
              name="email"
              id="inputEmail"
              className="border-3"
              onChange={e => setEmail(e.target.value)}
              required
              isInvalid={email === "" || /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email) === false}
            />
            <Form.Control.Feedback type="invalid" >
              <b>Email inválido.</b>
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" id="password" >
            <Form.Label htmlFor="inputPassword">Senha</Form.Label><br />
            <Form.Control
              type="password"
              name="password"
              id="inputPassword"
              className="border-3"
              onChange={e => setPassword(e.target.value)}
              required
              isInvalid={password.length < 8}
            />
            {valid === false ? (<span style={{ color: "red" }}><b>Senha ou Email inválidos</b></span>) :
              (<Form.Control.Feedback type="invalid">
                <b>Senha Inválida.</b>
              </Form.Control.Feedback>)}
          </Form.Group>

          <div className="col-12 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-dark mt-4 rounded-4"
              style={{ borderRadius: '10px' }}
              disabled={isLoading || password.length < 8 || email === "" || /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email) === false}>
              Enviar
            </button>
          </div>
          <br />
          <p className="col-12 d-flex justify-content-center" style={{ fontSize: "15px" }}>Não possui uma conta?</p>
          <div className="col-12 d-flex justify-content-center">
            <Button id="form_btn" className="bg-white" onClick={onClick_form_btn} variant="light" style={{ border: "1px solid black" }}>Criar conta</Button>
          </div>
        </Form>
        <br />
      </div>
    </div>
  );
}