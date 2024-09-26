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
}

export function DialogDemo() {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(false);
    const [user, setUser] = useState<Usuario | null>(null);
    const [userEmail, setUserEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [open, setOpen] = useState(false); // Estado para controlar o diálogo

    const notifysuccess = () => toast.success("Perfil editado com sucesso!");
    const notifyerror = () => toast.warning("Erro ao editar perfil!");

    useEffect(() => {
        document.title = 'Perfil';
        client.get("/accounts/usuario")
            .then(function (res) {
                setCurrentUser(true);
                setUser(res.data.user);
                setUserEmail(res.data.user.email);
                setFirstName(res.data.user.first_name);
                setLastName(res.data.user.last_name);
            })
            .catch(function (error) {
                setCurrentUser(false);
                navigate('/login');
            });
    }, [navigate]);

    const handleSave = () => {
        if (user) {
            client.patch("/accounts/update/", {
                email: userEmail,
                first_name: firstName,
                last_name: lastName,
            })
            .then(() => {
                setUser((prev) => prev ? { ...prev, first_name: firstName, last_name: lastName } : null);
                notifysuccess();
                setOpen(false); // Fecha o diálogo após o sucesso
            })
            .catch(error => {
                console.error("Erro ao atualizar os dados:", error);
                notifyerror();
            });
        }
    };

    return (
        <>
            <ToastContainer />
            {currentUser && user && (
                <Dialog.Root open={open} onOpenChange={setOpen}>
                    <Dialog.Trigger asChild>
                        <Button variant="primary">Editar perfil</Button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="DialogOverlay" />
                        <Dialog.Content className="DialogContent">
                            <Dialog.Title className="DialogTitle">Editar perfil</Dialog.Title>
                            <Dialog.Description className="DialogDescription">
                                Faça alterações no seu perfil aqui. Clique em salvar quando terminar.
                            </Dialog.Description>
                            <Form.Group controlId="firstName">
                                <Form.Label>Primeiro Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="lastName">
                                <Form.Label>Último Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
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
