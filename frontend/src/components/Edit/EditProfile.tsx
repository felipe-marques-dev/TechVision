import { Button, Form } from "react-bootstrap";
import { client } from "../../services/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { ToastContainer, toast } from 'react-toastify';
import './Edit.css'
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

    const handleSave = async () => { // Tornando a função assíncrona
        if (user) {
            try {
                await client.patch("/accounts/update/", {
                    email: userEmail,
                    first_name: firstName,
                    last_name: lastName,
                });
    
                // Atualizando o estado do usuário
                setUser(prev => prev ? { ...prev, first_name: firstName, last_name: lastName } : null);
                setOpen(false); 
                notifysuccess(); // Notificação de sucesso
    
                // Esperar 1.5 segundos antes de recarregar a página
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
    
            } catch (error) {
                console.error("Erro ao atualizar os dados:", error);
                notifyerror(); // Notificação de erro
            }
        }
    };
    
    return (
        <>
            <ToastContainer />
            {currentUser && user && (
                <Dialog.Root open={open} onOpenChange={setOpen}>
                    <Dialog.Trigger asChild>
                        <Button variant="outline-primary">Editar perfil</Button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="DialogOverlay" />
                        <Dialog.Content className="DialogContent">
                            <Dialog.Title className="DialogTitle"><h3 className="d-flex justify-content-center" id="title"> Editar perfil </h3></Dialog.Title>
         
                            <Form.Group controlId="firstName">
                                <Form.Label>Primeiro Nome</Form.Label>
                                <Form.Control id="formControl"
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="lastName">
                                <Form.Label>Sobrenome</Form.Label>
                                <Form.Control id="formControl"
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
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
            )}
        </>
    );
}
function then(arg0: () => void) {
    throw new Error("Function not implemented.");
}

