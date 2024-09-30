import { Button, Form } from "react-bootstrap";
import { client } from "../../services/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { ToastContainer, toast } from 'react-toastify';
import './Edit.css';
import 'react-toastify/dist/ReactToastify.css';


interface Usuario {
    id: number;
    first_name: string;
    last_name: string;
    is_verified: boolean;
    email: string;
    password : string;
}



export function EditPassword() {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(false);
    const [user, setUser] = useState<Usuario | null>(null);
    const [userPassword, setUserPassword] = useState('');
    const [open, setOpen] = useState(true); 
    const [userEmail, setUserEmail] = useState('');
    

    useEffect(() => {
        document.title = 'Editar senha';
        toast.success("Senha Válida!");
        client.get("/accounts/usuario")
            .then(function (res) {
                setCurrentUser(true);
                setUser(res.data.user);
                setUserPassword(res.data.user.password);
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
                password : userPassword,
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
        <ToastContainer/>
            {currentUser && user && (
                <Dialog.Root open={open} onOpenChange={setOpen}>
                    <Dialog.Portal>
                        <Dialog.Overlay className="DialogOverlay" />
                        <Dialog.Content className="DialogContent">
                            <Dialog.Title className="DialogTitle">Editar Senha</Dialog.Title>
                            <Dialog.Description className="DialogDescription">
                                Faça alterações na sua senha aqui. Clique em salvar quando terminar.
                            </Dialog.Description>
                            <Form.Group controlId="firstName">
                                <Form.Label>Nova senha</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => setUserPassword(e.target.value)}
                                />
                            </Form.Group>
                            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                                <Button onClick={handleSave} className="Button green">Salvar alterações</Button>
                                <Dialog.Close asChild>
                                    <Button className="IconButton" aria-label="Close">
                                        <Cross2Icon />
                                    </Button>
                                </Dialog.Close>
                            </div>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            )}
        </>
    );
}
