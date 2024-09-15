import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { client } from "../../services/client";
import { Logo } from "../../components/Logo";

export function Login() {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  function onClick_form_btn() {
    return navigate('/cadastro');
  }

  function submitLogin(e: { preventDefault: () => void; }) {
    e.preventDefault();
    client.post(
      "accounts/login",
      {
        email: email,
        password: password,
      }
    ).then(function (res) {
      setCurrentUser(true);
    });
  }

  if (currentUser) {
    return navigate('/profile');
  }

  return (
    <div>
      <div className="d-flex position-relative justify-content-center align-bottom p-5">
                <Logo />
      </div>
      <div className="container-fluid mb-auto rounded-4 w-25 position-relative bg-secondary p-4" style={{ borderRadius: '20px', minWidth: "300px"}}>
        <h1 className="d-flex justify-content-center" id="title">Login</h1>
        <form id="login-form" method="post" onSubmit={e => submitLogin(e)}>
          <div className="mb-3" id="email">
            <label htmlFor="inputEmail" className="form-label">Email</label><br />
            <input
              type="email"
              name="email"
              id="inputEmail"
              className="form-control"
              onChange={e => setEmail(e.target.value)}
              required />
            <div id="email-error" className="text-danger"></div>
          </div>
          <div className="mb-3" id="password">
            <label htmlFor="inputPassword" className="form-label">Senha</label><br />
            <input
              type="password"
              name="password"
              id="inputPassword"
              className="form-control"
              onChange={e => setPassword(e.target.value)}
              required />
            <div id="password-error" className="text-danger"></div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <button type="submit" className="btn btn-dark mt-4 rounded-4" style={{ borderRadius: '10px' }}>
              Enviar
            </button>
          </div>
          <br />
          <p className="col-12 d-flex justify-content-center" style={{ fontSize: "15px" }}>Não possui uma conta?</p>
          <div className="col-12 d-flex justify-content-center">
            <Button id="form_btn" className="bg-secondary" onClick={onClick_form_btn} variant="light" style={{ border: "1px solid black" }}>Criar conta</Button>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
}