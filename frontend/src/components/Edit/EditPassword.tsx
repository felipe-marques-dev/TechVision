import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { client } from "../../services/client";
import { useState } from "react";
import '../../styles/Edit.css';
import { useNavigate } from "react-router-dom";

type userPasswordProps = {
    userEmail: string;
}

export function PasswordValidation({ userEmail }: userPasswordProps) {
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
    const [showUpdateSuccessful, setShowUpdateSuccessful] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [showUpdateError, setShowUpdateError] = useState(false);
    const [valid, setValid] = useState(true);
    const [btnMessage, setBtnMessage] = useState<string>("Verificar");
    const [btnMessageUpdatePassword, setBtnMessageUpdatePassword] = useState<string>("Salvar Alterações");
    const navigate = useNavigate();

    function handleSave() {
        setBtnMessage("Verificando...");
        document.getElementById("btnCheckPassword").disabled = true;

        client.post("accounts/check/", {
            email: userEmail,
            password: password,
        })
            .then((res) => {
                handleClose();
                setShowUpdate(true);
            })
            .catch((error) => {
                setShowError(true);
                setValid(false);
            });
    }

    const handleUpdate = () => {
        setBtnMessageUpdatePassword("Salvando Alterações...");
        document.getElementById("btnUpdatePassword").disabled = true;

        client.patch("/accounts/update/", {
            password: newPassword,
            email: userEmail,
        })
            .then((res) => {
                setShowUpdateSuccessful(true);
                handleUpdateClose();
            },
                (error) => {
                    setShowUpdateError(true);
                    handleClose();
                });
    }

    const handleClose = () => {
        setShow(false);
        setPassword("");
        setBtnMessage("Verificar");
    }

    const handleCloseError = () => {
        setShowError(false);
        setBtnMessage("Verificar");
    }

    const handleCloseUpdateSuccessful = () => {
        setShowUpdateSuccessful(false);
        setBtnMessageUpdatePassword("Salvar Alterações");
        navigate("/");
    }

    const handleUpdateClose = () => {
        setShowUpdate(false);
        setNewPassword("");
        setNewPasswordConfirm("");
        setBtnMessageUpdatePassword("Salvar Alterações");
    }

    const handleCloseUpdateError = () => {
        setShowUpdateError(false);
        setBtnMessageUpdatePassword("Salvar Alterações");
    }

    const clearErrors = () => {
        setValid(true);
    }

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        clearErrors();
        setPassword(event.target.value);
    }

    return (
        <>
            <div className="m-0 p-0 d-flex-column align-items-center">

                <h6>Senha</h6>
                <Button id="titulo" variant="outline-light" onClick={() => setShow(true)} style={{ height: "50px", width: "100px" }}>
                    <input id="password" type="password" defaultValue={"********"} style={{ width: "100px" }} readOnly />
                </Button>
            </div>

            <Modal centered show={show} onHide={() => handleClose()} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title className="outline-primary d-flex justify-content-center">
                        <h2 className="d-flex justify-content-center">Verificar Senha</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="newFirstName" className="object-fit-fill" id="controlGroup">
                        <Form.Label className="d-flex justify-content-start">Insira a senha atual</Form.Label>
                        <Form.Control
                            type="password"
                            id="input"
                            value={password}
                            onChange={handleChangePassword}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    <Button variant="secondary" onClick={() => handleClose()}>
                        Close
                    </Button>
                    <Button
                        onClick={handleSave}
                        className="Button"
                        variant="outline-primary"
                        id="btnCheckPassword"
                        disabled={password.length < 8 || password === "" || password === null || !valid}>
{btnMessage}
                        </Button>

                </Modal.Footer>
            </Modal>

            <Modal centered show={showError} onHide={handleCloseError} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-danger">Erro!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Senha Inválida</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseError}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* password update */}

            <Modal centered show={showUpdate} onHide={() => handleUpdateClose()} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title className="outline-primary d-flex justify-content-center">
                        <h2 className="d-flex justify-content-center">Editar Senha</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="my-2" id="controlGroupUpdate">
                        <Form.Label>Informe sua nova senha</Form.Label>
                        <Form.Control
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            isValid={newPassword.length > 8 || newPassword === newPasswordConfirm || /^[a-z0-9.]/.test(newPassword)}
                            isInvalid={newPassword.length < 8 || newPassword !== newPasswordConfirm || !(/^[a-z0-9.]/.test(newPassword))}
                        />
                        {(newPassword === null || newPassword === "" || newPassword.length < 8 || !/^[a-z0-9.]/.test(newPassword)) ? (
                            <Form.Control.Feedback type="invalid">
                                <b>Senha deve possuir no mínimo 8 caracteres </b>
                            </Form.Control.Feedback>
                        ) : (
                            <Form.Control.Feedback type="invalid">
                                <b>As senhas não combinam</b>
                            </Form.Control.Feedback>
                        )}
                    </Form.Group>

                    <Form.Group className="my-2" id="controlGroupUpdate">
                        <Form.Label>Confirme sua nova senha</Form.Label>
                        <Form.Control
                            type="password"
                            value={newPasswordConfirm}
                            onChange={(e) => setNewPasswordConfirm(e.target.value)}
                            isValid={newPassword.length > 8 || newPassword === newPasswordConfirm || /^[a-z0-9.]/.test(newPassword)}
                            isInvalid={newPassword.length < 8 || newPassword !== newPasswordConfirm || !(/^[a-z0-9.]/.test(newPassword))}
                        />
                        <Form.Control.Feedback type="invalid">
                            <b>As senhas não combinam</b>
                        </Form.Control.Feedback>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    <Button variant="secondary" onClick={() => handleUpdateClose()}>
                        Close
                    </Button>
                    <Button
                        onClick={handleUpdate}
                        className="Button"
                        variant="outline-primary"
                        id="btnUpdatePassword"
                        disabled={newPassword.length < 8 || newPassword !== newPasswordConfirm || newPassword === "" || newPasswordConfirm === "" || newPassword === null}>
                            {btnMessageUpdatePassword}
                            </Button>
                </Modal.Footer>
            </Modal>
            <Modal centered show={showUpdateSuccessful} onHide={handleCloseUpdateSuccessful} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-success">Sucesso!</Modal.Title>
                </Modal.Header>
                <Modal.Body>A sua senha foi atualizada. Por questões de segurança você será desconectado da sua conta.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseUpdateSuccessful}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal centered show={showUpdateError} onHide={handleCloseUpdateError} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-danger">Erro!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Erro ao atualizar a senha.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseUpdateError}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}