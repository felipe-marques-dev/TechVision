import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../services/client";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { Logo } from "../components/Logo";
import '../styles/loginECadastro.css';

export function Cadastro() {

    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(false);
    const [email, setEmail] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [valid, setValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Alterar a tag title da pagina
        document.title = 'Cadastro';
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
    function onClickFormBtn() {
        return navigate('/login');
    }

    // Função para enviar os dados para realizar o cadastro
    function submitRegistration(e: { preventDefault: () => void; }) {
        // Impede que a página recarregue automáticamente
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            client.post(
                "accounts/cadastro",
                {
                    email: email,
                    first_name: first_name,
                    last_name: last_name,
                    password: password,
                }
            )
                // faz o login automaticamente 
                // se o cadastro não retornar nenhum erro
                .then((res) => {
                    setValid(true);
                    console.log(valid);
                    client.post(
                        "accounts/login",
                        {
                            email: email,
                            password: password,
                        }
                    ).then(function (res) {
                        setCurrentUser(true);
                    });
                },
                    // se o email já está sendo utilizado retorna um erro
                    // no campo de email
                    (error) => {
                        setCurrentUser(false);
                        setValid(false);
                    });
            return setIsLoading(false);
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
            <Container fluid id="containerFluid" className="mb-3 rounded-4 bg-white border-5 border-black p-4">
                <h1 className="d-flex justify-content-center" id="title">Cadastre-se</h1>
                <Form className="w-100" id="cadastro-form" method="post" onSubmit={e => submitRegistration(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="inputEmail" className="form-label">Email</Form.Label><br />
                        <Form.Control
                            type="email"
                            name="email"
                            id="inputEmail"
                            className="border-3 rounded-3"
                            onChange={e => setEmail(e.target.value)}
                            required
                            isValid={/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email) || valid}
                            isInvalid={email === "" || !(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email)) || !valid}
                        />
                        {!valid ? (<Form.Control.Feedback type="invalid">
                            <b>Email já utilizado por outro usuário</b>
                        </Form.Control.Feedback>) :
                            (<Form.Control.Feedback type="invalid">
                                <b>Email inválido</b>
                            </Form.Control.Feedback>)}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="inputNome" className="form-label">Nome</Form.Label><br />
                        <Form.Control
                            type="text"
                            name="first_name"
                            id="inputNome"
                            className="border-3 rounded-3"
                            onChange={e => setFirst_name(e.target.value)}
                            required
                            isValid={first_name !== ""}
                            isInvalid={first_name === "" || !(/^[a-z0-9.]/i.test(first_name))}
                        />
                        <Form.Control.Feedback type="invalid" >
                            <b>Campo não preenchido</b>
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="inputSobrenome" className="form-label">Sobrenome</Form.Label><br />
                        <Form.Control
                            type="text"
                            name="last_name"
                            id="inputSobrenome"
                            className="border-3 rounded-3"
                            onChange={e => setLast_name(e.target.value)}
                            required
                            isValid={last_name !== ""}
                            isInvalid={last_name == "" || !(/^[a-z0-9.]/i.test(last_name))} />
                        <Form.Control.Feedback type="invalid" >
                            <b>Campo não preenchido</b>
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="inputPassword" className="form-label">Senha</Form.Label><br />
                        <Form.Control
                            type="password"
                            name="password"
                            id="inputPassword"
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
                        <Form.Label htmlFor="inputPasswordConfirm" className="form-label">Confirme a Senha</Form.Label><br />
                        <Form.Control
                            type="password"
                            name="passwordConfirm"
                            id="inputPasswordConfirm"
                            className="border-3 rounded-3"
                            onChange={e => setPasswordConfirm(e.target.value)}
                            required
                            isValid={password.length > 8 || password === passwordConfirm || /^[a-z0-9.]/.test(password)}
                            isInvalid={password.length < 8 || password !== passwordConfirm || !(/^[a-z0-9.]/.test(password))} />
                        <Form.Control.Feedback type="invalid">
                            <b>As senhas não combinam</b>
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className="col-12 d-flex justify-content-center">
                        <Button
                            type="submit"
                            className="btn-dark rounded-3 w-100"
                            disabled={isLoading || password.length < 8 || email === "" || !(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email)) || password !== passwordConfirm}>
                            {isLoading ? (<Spinner animation="border" />) : (<p className="m-0">Enviar</p>)}
                        </Button>
                    </div>
                </Form>
            </Container>
            <br />
            <div id="containerFluid" className="container-fluid position-relative p-0">
                <div className="d-flex justify-content-center p-0 m-0">
                    <div className="border-top mt-2 me-1" id="divisorCadastro"></div>
                    <p>Já possui uma conta?</p>
                    <div className="border-top mt-2 ms-1" id="divisorCadastro"></div>
                </div>

                <div className="col-12 d-flex justify-content-center">
                    <Button id="navigateToLoginBtn" className="formBtn bg-white rounded-3 w-100" onClick={onClickFormBtn} variant="light">Fazer Login</Button>
                </div>
            </div>

        </div>
    )
}