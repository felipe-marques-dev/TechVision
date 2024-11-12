import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { client } from "../../services/client";
import { useState } from "react";
import '../../styles/Edit.css';

type userFirstNameProps = {
    userEmail: string,
    firstName: string,
}

type userLastNameProps = {
    userEmail: string,
    lastName: string,
}

export function EditFirstName({ userEmail, firstName }: userFirstNameProps) {
    const [firstNameModified, setFirstNameModified] = useState(firstName);
    const [showSuccessful, setShowSuccessful] = useState(false);
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);
    const [btnMessage, setBtnMessage] = useState<string>("Salvar Alterações");

    const handleCloseSuccessful = () => {
        setShowSuccessful(false);
    }

    const handleClose = () => {
        setShow(false);
        setBtnMessage("Salvar Alterações");
    }

    const handleCloseError = () => {
        setShowError(false);
    }

    const handleUpdateFirstName = async () => {
        setBtnMessage("Salvando Alterações...");
        document.getElementById("btnUpdateFirstName").disabled = true;
        client.patch("/accounts/update/", {
            email: userEmail,
            first_name: firstNameModified.trim(),
        })
            .then((res) => {
                setShowSuccessful(true);
                handleClose();
            },
                (error) => {
                    setShowError(true);
                    handleClose();
                });
    }

    return (
        <>
            <div className="m-0 p-0 d-flex align-items-center">
                <Button id="titulo" variant="outline-light" onClick={() => setShow(true)} style={{ height: "50px" }}>{firstName.length > 15 ? `${firstName.slice(0, 15)}...` : firstName}</Button>
            </div>

            <Modal centered show={show} onHide={() => handleClose()} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title className="outline-primary d-flex justify-content-center">
                        <h2 className="d-flex justify-content-center">Editar Nome</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="firstName" className="mb-3" id="controlGroup" >
                        <Form.Label className="d-flex justify-content-start">Nome Atual</Form.Label>
                        <Form.Control
                            type="text"
                            value={firstName}
                            disabled={true}
                        />
                    </Form.Group>
                    <Form.Group controlId="newFirstName" className="object-fit-fill" id="controlGroup">
                        <Form.Label className="d-flex justify-content-start">Novo Nome</Form.Label>
                        <Form.Control
                            type="text"
                            id="input"
                            value={firstNameModified}
                            onChange={(e) => setFirstNameModified(e.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    <Button variant="secondary" onClick={() => handleClose()}>
                        Close
                    </Button>
                    <Button
                        onClick={() => handleUpdateFirstName()}
                        className="Button"
                        variant="outline-primary"
                        id="btnUpdateFirstName"
                        disabled={firstNameModified === firstName || firstNameModified === "" || firstNameModified === null}>
                        {btnMessage}
                    </Button>

                </Modal.Footer>
            </Modal>

            <Modal centered show={showSuccessful} onHide={handleCloseSuccessful} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-success">Sucesso!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Perfil foi atualizado.</Modal.Body>
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
                <Modal.Body>Não foi possível atualizar o seu perfil. Por favor tente novamente mais tarde.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseError}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export function EditLastName({ userEmail, lastName }: userLastNameProps) {
    const [lastNameModified, setLastNameModified] = useState(lastName);
    const [showSuccessful, setShowSuccessful] = useState(false);
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);
    const [btnMessage, setBtnMessage] = useState<string>("Salvar Alterações");

    const handleCloseSuccessful = () => {
        setShowSuccessful(false);
    }

    const handleClose = () => {
        setShow(false);
        setBtnMessage("Salvar Alterações");
    }

    const handleCloseError = () => {
        setShowError(false);
    }

    const handleSave = async () => {
        setBtnMessage("Salvando Alterações...");
        document.getElementById("btnUpdateLastName").disabled = true;
        client.patch("/accounts/update/", {
            email: userEmail,
            last_name: lastNameModified.trim(),
        })
            .then((res) => {
                setShowSuccessful(true);
                handleClose();
            },
                (error) => {
                    setShowError(true);
                    handleClose();
                });
    }

    return (
        <>
            <div className="m-0 p-0 d-flex align-items-center">
                <Button id="titulo" variant="outline-light" onClick={() => setShow(true)} style={{ height: "50px" }}>{lastName.length > 15 ? `${lastName.slice(0, 15)}...` : lastName}</Button>
            </div>

            <Modal centered show={show} onHide={() => handleClose()} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title className="outline-primary d-flex justify-content-center">
                        <h2 className="d-flex justify-content-center">Editar Sobrenome</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="firstName" className="mb-3" id="controlGroup">
                        <Form.Label className="d-flex justify-content-start">Sobrenome Atual</Form.Label>
                        <Form.Control
                            type="text"
                            value={lastName}
                            disabled={true}
                        />
                    </Form.Group>
                    <Form.Group controlId="newFirstName" className="object-fit-fill" id="controlGroup">
                        <Form.Label className="d-flex justify-content-start">Novo Sobrenome</Form.Label>
                        <Form.Control
                            type="text"
                            id="input"
                            value={lastNameModified}
                            onChange={(e) => setLastNameModified(e.target.value)}
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
                        id="btnUpdateLastName"
                        variant="outline-primary"
                        disabled={lastNameModified === lastName || lastNameModified === "" || lastNameModified === null}>
                        {btnMessage}
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal centered show={showSuccessful} onHide={handleCloseSuccessful} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-success">Sucesso!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Perfil foi atualizado.</Modal.Body>
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
                <Modal.Body>Não foi possível atualizar o seu perfil. Por favor tente novamente mais tarde.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseError}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
