import { Button } from "react-bootstrap";
import { client } from "../services/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav_bar } from "../components/NavBar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { EditFirstName, EditLastName } from "../components/Edit/EditProfile";
import { PasswordValidation } from "../components/Edit/PasswordValidation";
import '../styles/profile.css';
import { Usuario } from "../types/Usuario";

export function Profile() {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(false);
    const [user, setUser] = useState<Usuario | null>(null);

    useEffect(() => {
        client.get("/accounts/usuario")
            .then(function (res) {
                setCurrentUser(true);
                setUser(res.data.user); // Carregar o usuário inicialmente
            })
            .catch(function (error) {
                setCurrentUser(false);
                navigate('/login');
            });
    }, [user]);

    useEffect(() => {
        document.title = 'Perfil';
    });

    async function submitLogout(e: { preventDefault: () => void; }) {
        e.preventDefault();
        await client.post("accounts/logout", { withCredentials: true })
            .then(function (res) {
                setCurrentUser(false);
                navigate('/');
            });
    }

    if (!currentUser) {
        return navigate('/login');
    }

    return (
        <>
            <Nav_bar />
            {user && (
                <div className="container d-flex justify-content-center object-fit-fill" id="container">
                    <div className="row w-100 mx-auto">

                        <div className="d-flex-column my-3 align-items-center">
                            <h6>Nome</h6>
                            <EditFirstName userEmail={user.email} firstName={user.first_name} />
                        </div>

                        <div className="d-flex-column mb-3 align-items-center">
                            <h6>Sobrenome</h6>
                            <EditLastName userEmail={user.email} lastName={user.last_name} />
                        </div>

                        <div className="mb-3">
                            <h6>Email</h6>
                            <div id="titulo">{user.email}</div>

                            <div>
                                <label htmlFor="password"><h6>Senha</h6>
                                <input className="d-flex" id="password" type="password" defaultValue={"********"} readOnly />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="col d-flex justify-content-center my-5" id="col">
                <div className="row-fluid d-flex p-0 mt-0" id="row2">
                    <div className="me-3">

                    </div>
                    <div className="me-3">
                        <PasswordValidation />
                    </div>
                    <form onSubmit={e => submitLogout(e)}>
                        <Button type="submit" variant="danger">Log out</Button>
                    </form>
                </div>
            </div>

            {/* div provisória para deixar o footer na posição correta */}
            <div className="mb-5" style={{ height: "20px" }}></div>

            <Footer />
        </>
    );
}
