import { Button, Col, Container, Form, Modal, Spinner } from "react-bootstrap";
import { Logo } from "../components/Logo";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { client } from "../services/client";
import '../styles/loginECadastro.css'

// funcao para verificar o email antes de resetar a senha
export function EsqueciMinhaSenhaVerificacao() {
  const [isLoading, setIsLoading] = useState(false);
  const [valid, setValid] = useState(true);
  const [email, setEmail] = useState('');
  const [currentUser, setCurrentUser] = useState(false);
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [showSuccessful, setShowSuccessful] = useState(false);

  const handleCloseSuccessful = () => {
    setShowSuccessful(false);
  }

  const handleCloseError= () => setShowError(false);
  
  useEffect(() => {
    // Alterar a tag title da pagina
    document.title = 'Esqueci a senha';
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

  async function submitResetPasswordVerify(e: { currentTarget: any; stopPropagation(): unknown; preventDefault: () => void; }) {
    e.preventDefault();
    setIsLoading(true);

    // Envia requisição para o servidor 
    await client.post(
      "/redefinicao-de-senha/",
      {
        email: email,
      }
    ).then(function (res) {
      setValid(true);
      setIsLoading(false);
      setShowSuccessful(true);
    }).catch(function (error) {
      setValid(false);
      setIsLoading(false);
      setShowError(true);
    });
  }

  if (currentUser) {
    return navigate('/profile');
  }

  return (
    <>
      <div className="d-flex position-relative justify-content-center align-bottom p-4">
        <Logo />
      </div>
      <Container fluid id="containerFluidRecuperacaoDeSenha" className="mb-auto rounded-4 position-relative bg-white p-4 border-5 border-black">
        <h1 className="d-flex justify-content-center" id="title">Encontre sua conta</h1>
        <Form id="login-form" method="post" onSubmit={e => submitResetPasswordVerify(e)} noValidate>
          <Form.Group className="mb-3 mt-3 p-0" id="email">
            <Form.Label htmlFor="inputEmail">Informe o seu email para procurar sua conta.</Form.Label><br />
            <Form.Control
              type="email"
              name="email"
              className="border-3 rounded-3"
              id="inputEmailRecuperacaoDeSenha"
              onChange={e => setEmail(e.target.value)}
              required
              isValid={/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email) || valid}
              isInvalid={email === "" || !(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email)) || !valid}
            />
            {!valid ? (<Form.Control.Feedback type="invalid"><b>Senha ou Email inválidos</b></Form.Control.Feedback>) :
              (<Form.Control.Feedback type="invalid">
                <b>Email Inválido</b>
              </Form.Control.Feedback>)}
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button id="cancelBtn" className="formBtn bg-white w-100 rounded-3 me-2" onClick={() => { navigate('/login') }} variant="light">Cancelar</Button>
            <Button
              type="submit"
              id="continueBtn"
              className="btn btn-dark rounded-3 w-100"
              disabled={isLoading || email === "" || !(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email))}>
              {isLoading ? (<Spinner animation="border" />) : (<p className="m-0">Continuar</p>)}
            </Button>

          </div>
          <div className="col-12 d-flex justify-content-center">

          </div>
        </Form>
      </Container>

      <Modal centered show={showSuccessful} onHide={handleCloseSuccessful} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title className="text-success">Sucesso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Siga as instruções para a redefinição de senha no email que foi enviado.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSuccessful}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal centered show={showError} onHide={handleCloseError} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Erro!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Usuário não encontrado.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseError}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// funcao para mudar a senha
export function EsqueciMinhaSenha() {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [currentUser, setCurrentUser] = useState(false);
  const { encoded_pk } = useParams<{ encoded_pk: string }>()
  const { token } = useParams<{ token: string }>()
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [showSuccessful, setShowSuccessful] = useState(false);

  const handleCloseError = () => setShowError(false);
  const handleCloseSuccessful = () => {
    setShowSuccessful(false);
    navigate("/login");
  }

  useEffect(() => {
    // Alterar a tag title da pagina
    document.title = 'Esqueci a senha'; 
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

  async function submitResetPassword(e: { currentTarget: any; stopPropagation(): unknown; preventDefault: () => void; }) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(()=>{}, 1500);
    // Envia requisição para o servidor 
    await client.patch(
      `/redefinicao-de-senha/${encoded_pk}/${token}/`,
      {
        password: password,
      }
    ).then(function (res) {
      const message = res.data.message;
      console.log(message);
      setIsLoading(false);
      setShowSuccessful(true);
    }).catch(function (error) {
      setIsLoading(false);
      setShowError(true);
    });
  }

  if (currentUser) {
    return navigate('/profile');
  }

  return (
    <>
      <div className="d-flex position-relative justify-content-center align-bottom p-4">
        <Logo />
      </div>
      <Container fluid id="containerFluidRecuperacaoDeSenha" className="mb-auto rounded-4 position-relative bg-white p-4 border-5 border-black">
        <h1 className="d-flex justify-content-center" id="title">Altere sua senha</h1>
        <Form id="login-form" method="post" onSubmit={e => submitResetPassword(e)} noValidate>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="inputPassword" className="form-label">Informe sua nova senha.</Form.Label><br />
            <Form.Control
              type="password"
              name="password"
              id="inputPasswordRecuperacaoDeSenha"
              className="border-3 rounded-3"
              onChange={e => setPassword(e.target.value)}
              required
              isValid={password.length > 8 || password === passwordConfirm || /^[a-z0-9.]/.test(password)}
              isInvalid={password.length < 8 || password !== passwordConfirm || !(/^[a-z0-9.]/.test(password))}
            />
            {password.length < 8 || /^[a-z0-9.]/.test(password) === false ? (<Form.Control.Feedback type="invalid"><b>Senha deve possuir no mínimo 8 caracteres </b></Form.Control.Feedback>) :
              (<Form.Control.Feedback type="invalid">
                <b>As senhas não combinam</b>
              </Form.Control.Feedback>)}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="inputPasswordConfirm" className="form-label">Confirme a Senha.</Form.Label><br />
            <Form.Control
              type="password"
              name="passwordConfirm"
              id="inputPasswordConfirmRecuperacaoDeSenha"
              className="border-3 rounded-3"
              onChange={e => setPasswordConfirm(e.target.value)}
              required
              isValid={password.length > 8 || password === passwordConfirm || /^[a-z0-9.]/.test(password)}
              isInvalid={password.length < 8 || password !== passwordConfirm || !(/^[a-z0-9.]/.test(password))} />
            <Form.Control.Feedback type="invalid">
              <b>As senhas não combinam</b>
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button id="navigateToRegisterBtn" className="formBtn bg-white w-100 rounded-3 me-2" onClick={() => { navigate('/login') }} variant="light">Cancelar</Button>
            <Button
              type="submit"
              className="btn-dark rounded-3 w-100"
              disabled={isLoading || password.length < 8 || password !== passwordConfirm}>
              {isLoading ? (<Spinner animation="border" />) : (<p className="m-0">Enviar</p>)}
            </Button>

          </div>
          <div className="col-12 d-flex justify-content-center">

          </div>
        </Form>
      </Container>

      <Modal centered show={showError} onHide={handleCloseError} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Erro</Modal.Title>
        </Modal.Header>
        <Modal.Body>Token expirado!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseError}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal centered show={showSuccessful} onHide={handleCloseSuccessful} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title className="text-success">Sucesso</Modal.Title>
        </Modal.Header>
        <Modal.Body>Senha alterada com sucesso!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSuccessful}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}