import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../services/client";
import { Button, Form } from "react-bootstrap";
import { Logo } from "../components/Logo";
import { last } from "lodash";

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
    function onClick_form_btn() {
        return navigate('/login');
    }

    // Função para enviar os dados para realizar o cadastro
    function submitRegistration(e: { preventDefault: () => void; }) {
        // Impede que a página recarregue automáticamente
        e.preventDefault();
        setIsLoading(true);

        if (password === passwordConfirm) {
            client.post(
                "accounts/cadastro",
                {
                    email: email,
                    first_name: first_name,
                    last_name: last_name,
                    password: password,
                }
            ).then(function (res) {
                client.post(
                    "accounts/login",
                    {
                        email: email,
                        password: password,
                    }
                ).catch(function (error) {
                    setCurrentUser(false);
                })
                    .then(function (res) {
                        setCurrentUser(true);
                    });
            });
        }
        setIsLoading(false);

    }

    if (currentUser) {
        return navigate('/profile');
    }

    return (
        <div>
            <div className="d-flex position-relative justify-content-center align-bottom p-5">
                <Logo />
            </div>
            <div className="container-fluid mb-3 rounded-4 w-25 position-relative bg-white border-5 border-black p-4" style={{ borderRadius: '20px', minWidth: "300px" }}>
                <h1 className="d-flex justify-content-center" id="title">Cadastre-se</h1>
                <Form id="cadastro-form" method="post" onSubmit={e => submitRegistration(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="inputEmail" className="form-label">Email</Form.Label><br />
                        <Form.Control
                            type="email"
                            name="email"
                            id="inputEmail"
                            className="border-3"
                            onChange={e => setEmail(e.target.value)}
                            required
                            isValid={/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email)}
                            isInvalid={email === "" || /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email) === false}
                        />
                        <Form.Control.Feedback type="invalid" >
                            <b>Email inválido.</b>
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="inputNome" className="form-label">Nome</Form.Label><br />
                        <Form.Control
                            type="text"
                            name="first_name"
                            id="inputNome"
                            className="border-3"
                            onChange={e => setFirst_name(e.target.value)}
                            required
                            isValid={first_name !== ""}
                            isInvalid={first_name === "" || /^[a-z0-9.]/i.test(first_name) === false}
                        />
                        <Form.Control.Feedback type="invalid" >
                            <b>Campo não preenchido.</b>
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="inputSobrenome" className="form-label">Sobrenome</Form.Label><br />
                        <Form.Control
                            type="text"
                            name="last_name"
                            id="inputSobrenome"
                            className="border-3"
                            onChange={e => setLast_name(e.target.value)}
                            required 
                            isValid={last_name !== ""}
                            isInvalid={last_name == "" || /^[a-z0-9.]/i.test(last_name) === false}/>
                            <Form.Control.Feedback type="invalid" >
                            <b>Campo não preenchido.</b>
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="inputPassword" className="form-label">Senha</Form.Label><br />
                        <Form.Control
                            type="password"
                            name="password"
                            id="inputPassword"
                            className="border-3"
                            onChange={e => setPassword(e.target.value)}
                            required
                            isValid={password.length > 8 || password === passwordConfirm || /^[a-z0-9.]/.test(password) === true}
                            isInvalid={password.length < 8 || password !== passwordConfirm || /^[a-z0-9.]/.test(password) === false}
                        />
                        {password.length < 8 || /^[a-z0-9.]/.test(password) === false ? (<Form.Control.Feedback type="invalid"><b>Senha Inválida. Senha deve possuir no mínimo 8 caracteres </b></Form.Control.Feedback>) :
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
                            className="border-3"
                            onChange={e => setPasswordConfirm(e.target.value)}
                            required 
                            isValid={password.length > 8 || password === passwordConfirm || /^[a-z0-9.]/.test(password) === true}
                            isInvalid={password.length < 8 || password !== passwordConfirm || /^[a-z0-9.]/.test(password) === false}/>
                            <Form.Control.Feedback type="invalid">
                                <b>As senhas não combinam</b>
                            </Form.Control.Feedback>
                    </Form.Group>
                    <div className="col-12 d-flex justify-content-center">
                        <button 
                        type="submit" 
                        className="btn btn-dark mt-4 rounded-4" 
                        style={{ borderRadius: '10px' }}
                        disabled={isLoading}
                        >Enviar</button>
                    </div>
                    <br />
                    <p className="col-12 d-flex justify-content-center" style={{ fontSize: "15px" }}>Já possui uma conta?</p>
                    <div className="col-12 d-flex justify-content-center">
                        <Button id="form_btn" className="bg-white" onClick={onClick_form_btn} variant="light" style={{ border: "1px solid black" }}>Fazer Login</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}