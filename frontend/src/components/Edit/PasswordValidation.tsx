import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { client } from "../../services/client";
import { EditPassword } from "./EditPassword";
import { Form, Spinner } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import './Edit.css';
import 'react-toastify/dist/ReactToastify.css';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

interface Usuario {
    id: number;
    first_name: string;
    last_name: string;
    is_verified: boolean;
    email: string;
    password: string;
}

export function PasswordValidation() {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(false);
    const [user, setUser] = useState<Usuario | null>(null);
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [showEditPassword, setShowEditPassword] = useState(false);

    useEffect(() => {
        document.title = 'Login';
        client.get("/accounts/usuario")
            .then((res) => {
                setCurrentUser(true);
                setUser(res.data.user); 
                setUserEmail(res.data.user.email);
            })
            .catch((error) => {
                setCurrentUser(false);
                navigate('/login'); // Redireciona para login se não autenticado
            });
    }, [navigate]);

    function submitLogin(e: { currentTarget: any; preventDefault: () => void; }) {
        e.preventDefault();
        setIsLoading(true);

        if (password.length < 8) {
            setValid(false);
            setIsLoading(false);
            return;
        }

        setTimeout(() => {
            client.post("accounts/login", { 
                email: userEmail,
                password: password,
            })
            .then((res) => {
                setCurrentUser(true);
                setValid(true);
                setIsLoading(false);
                setOpen(false); 
                setShowEditPassword(true); 
            })
            .catch((error) => {
                toast.error("Erro ao validar senha!"); 
                setCurrentUser(false);
                setValid(false);
                setIsLoading(false);
            });
        }, 1000);
    }

    return (
        <>
            
            {currentUser && user && (
                <>
                    <Button variant="outline-dark" onClick={() => setOpen(true)}>Editar senha</Button>
                    <Dialog.Root open={open} onOpenChange={setOpen}>
                        <Dialog.Portal>
                            <Dialog.Overlay className="DialogOverlay" />
                            <Dialog.Content className="DialogContent">
                                <Dialog.Title className="DialogTitle"><h3 className="d-flex justify-content-center" id="title">Valide sua senha</h3></Dialog.Title>
                                
                                <div className="container-fluid mb-auto rounded-4 w-25 position-relative bg-white p-4" style={{ borderRadius: '20px', minWidth: "300px" }}>
                                    
                                    <Form id="login-form" method="post" onSubmit={submitLogin} noValidate>
                                        <Form.Group className="mb-3" id="password">
                                            <Form.Label htmlFor="inputPassword">Insira sua senha atual</Form.Label><br />
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                id="inputPassword"
                                                className="border-3"
                                                onChange={e => {
                                                    setPassword(e.target.value);
                                                    setValid(e.target.value.length >= 8); // Validação em tempo real
                                                }}
                                                required
                                                isInvalid={!valid}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                <b>Senha inválida.</b>
                                            </Form.Control.Feedback>
                                        </Form.Group>
            
                                        <div className="col-12 d-flex justify-content-center">
                                            <button
                                                type="submit"
                                                className="btn btn-dark mt-4 rounded-4"
                                                style={{ borderRadius: '10px' }}
                                                disabled={isLoading || password.length < 8}>
                                                {isLoading ? (<Spinner animation="border" />) : (<p className="m-0">Enviar</p>)}
                                            </button>
                                        </div>
                                    </Form>
                                    <br />
                                </div>
                                <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                                    <Dialog.Close asChild>
                                        <Button className="IconButton p-1 d-flex justify-content-center" variant="outline-dark" aria-label="Close">
                                            <Cross2Icon />
                                        </Button>
                                    </Dialog.Close>
                                </div>
                            </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>
                    <ToastContainer />

                    {/* Renderiza EditPassword quando showEditPassword é true */}
                    {showEditPassword && <EditPassword />}
                </>
            )}
        </>
    );
}
