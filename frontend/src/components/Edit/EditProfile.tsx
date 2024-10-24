import { Button, Form } from "react-bootstrap";
import { client } from "../../services/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

interface DialogDemoProps {
    onProfileUpdate: (updatedUser: Usuario) => void; // Novo prop
}

export function DialogDemo({ onProfileUpdate }: DialogDemoProps) {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(false);
    const [user, setUser] = useState<Usuario | null>(null);
    const [userEmail, setUserEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [open, setOpen] = useState(false);
    const [edited, setEdited] = useState<boolean>(false);

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
    }, [navigate, edited]);

    const handleSave = async () => {
        if (user) {
            try {
                await client.patch("/accounts/update/", {
                    email: userEmail,
                    first_name: firstName,
                    last_name: lastName,
                });

                const updatedUser = { ...user, first_name: firstName, last_name: lastName }; // Novo usuário atualizado
                setUser(updatedUser);
                onProfileUpdate(updatedUser); // Chama o callback com o usuário atualizado

                setOpen(false);
                notifysuccess();

            } catch (error) {
                console.error("Erro ao atualizar os dados:", error);
                notifyerror();
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
                        <Dialog.Overlay className="DialogOverlay d-flex justify-content-center" />
                        <Dialog.Content className="DialogContent">
                            <Dialog.Title className="DialogTitle">
                                <h3 className="d-flex justify-content-center" id="title"> Editar perfil </h3>
                            </Dialog.Title>
         
                            <Form.Group controlId="firstName" className="mx-auto object-fit-fill mb-3">
                                <Form.Label className="w-50 d-flex justify-content-start" style={{marginLeft: '37px'}}>Primeiro Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={firstName}
                                    className="w-75 mx-auto"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />  
                            </Form.Group>
                            <Form.Group controlId="lastName" className=" mx-auto object-fit-fill">
                                <Form.Label className="w-50 d-flex justify-content-start"  style={{marginLeft: '37px'}}>Sobrenome</Form.Label>
                                <Form.Control
                                    type="text"
                                    className="w-75 mx-auto"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <div className="d-flex justify-content-center" style={{ marginTop: 25 }}>
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
