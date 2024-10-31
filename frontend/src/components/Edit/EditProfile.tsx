import { Button, Col, Container, Form, Modal, Spinner } from "react-bootstrap";
import { client } from "../../services/client";
import { useState } from "react";
import '../../styles/Edit.css';
import { Usuario } from "../../types/Usuario";

export function EditFirstName({userEmail, firstName}: Usuario) {
    const [firstNameModified, setFirstNameModified] = useState('');
    const [showSuccessful, setShowSuccessful] = useState(false);
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleCloseSuccessful = () => {
        setShowSuccessful(false);
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleCloseError = () => {
        setShowError(false);
    }

    const handleSave = () => {
        console.log("firstName: " + firstNameModified.trim());

        client.patch("/accounts/update/", {
            email: userEmail,
            first_name: firstNameModified.trim(),
        })
            .then((res) => {
                setShowSuccessful(true);
                console.log(res.data);
                handleClose();
            },
                (error) => {
                    setShowError(true);
                    handleClose();
                    console.log(error);
                });
        setFirstNameModified("");
    };

    return (
        <>
        <div className="m-0 p-0 d-flex align-items-center">
            <Button id="titulo" variant="outline-light" onClick={() => setShow(true)} style={{height: "50px"}}>{firstName}</Button>
        </div>
            
                <Modal centered show={show} onHide={() => handleClose()} animation={true}>
                    <Modal.Header closeButton>
                        <Modal.Title className="outline-primary d-flex justify-content-center">
                            <h2 className="d-flex justify-content-center">Editar Nome</h2>
                            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="firstName" className="mx-auto object-fit-fill mb-3">
                            <Form.Label className="w-50 d-flex justify-content-start" style={{ marginLeft: '37px' }}>Nome Atual</Form.Label>
                            <Form.Control
                                type="text"
                                value={firstName}
                                className="w-75 mx-auto"
                                onChange={(e) => setFirstNameModified(e.target.value)}
                                disabled={true}
                            />
                        </Form.Group>
                        <Form.Group controlId="lastName" className=" mx-auto object-fit-fill">
                            <Form.Label className="w-50 d-flex justify-content-start" style={{ marginLeft: '37px' }}>Novo Nome</Form.Label>
                            <Form.Control
                                type="text"
                                className="w-75 mx-auto"
                                onChange={(e) => setFirstNameModified(e.target.value)}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => handleClose()}>
                            Close
                        </Button>
                        <Button
                            onClick={handleSave}
                            className="Button"
                            variant="outline-primary"
                            disabled={firstNameModified === firstName || firstNameModified === "" || firstNameModified === null}
                        >Salvar alterações</Button>
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
                <Modal.Body>Não foi possível atualizar o seu perfil. Por Favor tente novamente mais tarde.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseError}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
