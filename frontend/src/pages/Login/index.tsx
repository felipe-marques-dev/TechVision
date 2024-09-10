import { useCallback, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { genSaltSync, hashSync } from "bcrypt-ts";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const salt = genSaltSync(10);
const hash = hashSync("", salt);

  
  const saltRounds = 10; // Número de rounds para o salt

  // Função para hash de senha
  function hashPassword(password: string) {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    console.log(hash);
    return hash;
  }
  

export function Login(){

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(false);
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  useEffect(() => {
    // Alterar a tag title da pagina
    document.title = 'Login';
    // fazer a requisicao para 
    //ver o status de sessao 
    // do usuario
    client.get("/accounts/usuario")
    .then(function(res){
      setCurrentUser(true);
    })
    .catch(function(error){
      setCurrentUser(false);
    })
  }, []);

  function update_form_btn() {
    if (registrationToggle) {
      document.getElementById("form_btn").innerHTML = "Register";
      setRegistrationToggle(false);
    } else {
      document.getElementById("form_btn").innerHTML = "Log in";
      setRegistrationToggle(true);
    }
  }

  function submitRegistration(e: { preventDefault: () => void; }){
    e.preventDefault();
    if(password === passwordConfirm){
      client.post(
        "accounts/cadastro",
        {
          email: email,
          first_name: first_name,
          last_name: last_name,
          password: hashPassword(password),
        }
      ).then(function(res){
        client.post(
          "accounts/login",
          {
            email: email,
            password: hashPassword(password),
          }
        ).then(function(res){
          setCurrentUser(true);
        });
      });
    }
    else{
      return alert("Os campos de senha são diferentes")
    }
    
  }

  function submitLogin(e: { preventDefault: () => void; }){
    e.preventDefault();
    client.post(
      "accounts/login",
      {
        email: email,
        password: password
      }
    ).then(function(res){
      setCurrentUser(true);
    });
  }

  function submitLogout(e: { preventDefault: () => void; }){
    e.preventDefault();
    client.post(
      "accounts/logout",
      {withCredentials: true}
    ).then(function(res){
      setCurrentUser(false);
    });
  }

  if(currentUser){
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Authentication App</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <form onSubmit={e => submitLogout(e)}>
                  <Button type="submit" variant="light">Log out</Button>
                </form>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          <div className="center">
            <h2>You're logged in!</h2>
          </div>
        </div>
    );
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Authentication App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button id="form_btn" onClick={update_form_btn} variant="light">Register</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {
      registrationToggle ? (
        <div className="container-fluid mb-3 rounded-4 w-25 position-absolute top-50 start-50 translate-middle bg-secondary p-4" style={{borderRadius: '20px'}}>
      <h1 className="d-flex justify-content-center" id="title">Cadastre-se</h1>
      <form id="cadastro-form" method="post" onSubmit={e => submitRegistration(e)}>
          <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">Email</label><br/>
              <input 
              type="email" 
              name="email" 
              id="inputEmail" 
              className="form-control" 
              onChange={e => setEmail(e.target.value)}
              required/>
              <div id="email-error" className="text-danger"></div>
          </div>
          <div className="mb-3">
              <label htmlFor="inputNome" className="form-label">Nome</label><br/>
              <input 
              type="text" 
              name="first_name" 
              id="inputNome" 
              className="form-control"
              onChange={e => setFirst_name(e.target.value)} 
              required/>
              <div id="nome-error" className="text-danger"></div>
          </div>
          <div className="mb-3">
              <label htmlFor="inputSobrenome" className="form-label">Sobrenome</label><br/>
              <input 
              type="text" 
              name="last_name" 
              id="inputSobrenome" 
              className="form-control" 
              onChange={e => setLast_name(e.target.value)}
              required/>
              <div id="sobrenome-error" className="text-danger"></div>
          </div>
          <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">Senha</label><br/>
              <input 
              type="password" 
              name="password" 
              id="inputPassword" 
              className="form-control"
              onChange={e => setPassword(e.target.value)}
              required/>
              <div id="password-error" className="text-danger"></div>
          </div>
          <div className="mb-3">
              <label htmlFor="inputPasswordConfirm" className="form-label">Confirme a Senha</label><br/>
              <input 
              type="password" 
              name="passwordConfirm" 
              id="inputPasswordConfirm" 
              className="form-control"
              onChange={e => setPasswordConfirm(e.target.value)}
              required/>
              <div id="password-error" className="text-danger"></div>
          </div>
          <div className="col-12 d-flex justify-content-center">
              <button type="submit" className="btn btn-dark mt-4 rounded-4" style={{borderRadius: '10px'}}>Criar conta</button>
          </div>
      </form>
  </div>
      ) : (
        <div className="container-fluid mb-3 rounded-4 w-25 position-absolute top-50 start-50 translate-middle bg-secondary p-4" style={{borderRadius: '20px'}}>
        <h1 className="d-flex justify-content-center" id="title">Login</h1>
        <form id="login-form" method="post" onSubmit={e => submitLogin(e)}>
            <div className="mb-3" id="email">
                <label htmlFor="inputEmail" className="form-label">Email</label><br/>
                <input 
                type="email" 
                name="email" 
                id="inputEmail" 
                className="form-control" 
                onChange={e => setEmail(e.target.value)}
                required/>
                <div id="email-error" className="text-danger"></div>
            </div>
            <div className="mb-3" id="password">
                <label htmlFor="inputPassword" className="form-label">Senha</label><br/>
                <input 
                type="password" 
                name="password" 
                id="inputPassword" 
                className="form-control"
                onChange={e => setPassword(e.target.value)}
                required/>
                <div id="password-error" className="text-danger"></div>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-dark mt-4 rounded-4" style={{borderRadius: '10px'}}>
                  Enviar
                </button>
            </div>
        </form>
        <br /> 
    </div>
      )
    }
    </div>  
  );
}