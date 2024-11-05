import { Button, Form } from "react-bootstrap";
import { client } from "../../services/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { ToastContainer, toast } from 'react-toastify';
import '../../styles/Edit.css';
import 'react-toastify/dist/ReactToastify.css';
import { Usuario } from "../../types/Usuario";

export function EditPassword() {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(false);
    const [user, setUser] = useState<Usuario | null>(null);
    const [userPassword, setUserPassword] = useState('');
    const [open, setOpen] = useState(true);
    const [userEmail, setUserEmail] = useState('');
    const [userPasswordConfirm, setUserPasswordConfirm] = useState('');

    useEffect(() => {
        document.title = 'Editar senha';
        toast.success("Senha Válida!");
        client.get("/accounts/usuario")
            .then(function (res) {
                setCurrentUser(true);
                setUser(res.data.user);
                setUserEmail(res.data.user.email);
            })
            .catch(function (error) {
                setCurrentUser(false);
                navigate('/login');

            });
    }, [navigate]);



    const handleSave = () => {
        if (user) {
            client.patch("/accounts/update/", {
                password: userPassword,
                email: userEmail,
            })
                .then(() => {
                    setUser((prev) => prev ? { ...prev, password: userPassword } : null);
                    toast.success("Senha alterada com sucesso!")
                    setOpen(false); // Fecha o diálogo após o sucesso
                })
                .catch(error => {
                    console.error("Erro ao atualizar os dados:", error);
                    toast.error("Erro ao alterar senha")
                });
        }
    };

    return (
        <>
<div className="m-0 p-0 d-flex align-items-center">
            <Button id="titulo" variant="outline-light" onClick={() => setShow(true)} style={{height: "50px"}}>********</Button>
        </div>
                <Dialog.Root open={open} onOpenChange={setOpen}>
                    <Dialog.Portal>
                        <Dialog.Overlay className="DialogOverlay" />
                        <Dialog.Content className="DialogContent">
                            <Dialog.Title className="DialogTitle"><h3 className="d-flex justify-content-center" id="title">Editar Senha </h3></Dialog.Title>

                            <Form.Group className="mt-2" >
                                <Form.Label>Informe sua nova senha</Form.Label>
                                <Form.Control id="formControl"
                                    type="text"
                                    onChange={(e) => setUserPassword(e.target.value)}
                                />
                                {(!userPassword || userPassword.length < 8 || !/^[a-z0-9.]/.test(userPassword)) ? (
                                    <Form.Control.Feedback type="invalid">
                                        <b>Senha deve possuir no mínimo 8 caracteres </b>
                                    </Form.Control.Feedback>
                                ) : (
                                    <Form.Control.Feedback type="invalid">
                                        <b>As senhas não combinam</b>
                                    </Form.Control.Feedback>
                                )}
                            </Form.Group>
                            

                            <Form.Group>
                                <Form.Label>Confirme sua senha</Form.Label>
                                <Form.Control style={{width:"90%"}}
                                    type="text"
                                    onChange={(e) => setUserPasswordConfirm(e.target.value)}
                                    required
                                    isValid={userPassword.length > 8 || userPassword === userPasswordConfirm || /^[a-z0-9.]/.test(userPassword)}
                                    isInvalid={userPassword.length < 8 || userPassword !== userPasswordConfirm || !(/^[a-z0-9.]/.test(userPassword))}
                                />
                                <Form.Control.Feedback type="invalid">
                                    <b>As senhas não combinam</b>
                                </Form.Control.Feedback>
                            </Form.Group>


                            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                                <Button onClick={handleSave} className="Button" variant="outline-primary">Salvar alterações</Button>
                                <Dialog.Close asChild>
                                    <Button className="IconButton p-1 d-flex justify-content-center" variant="outline-dark" aria-label="Close">
                                        <Cross2Icon />
                                    </Button>
                                </Dialog.Close>
                            </div>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
        </>
    );
}
