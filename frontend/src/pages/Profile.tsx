import { Button, Spinner } from "react-bootstrap";
import { client } from "../services/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav_bar } from "../components/NavBar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { EditFirstName, EditLastName } from "../components/Edit/EditProfile";
import { PasswordValidation } from "../components/Edit/EditPassword";
import '../styles/profile.css';
import { Usuario } from "../types/Usuario";

export function Profile() {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(false);
    const [user, setUser] = useState<Usuario | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        document.title = 'Meu perfil';
        client.get("/accounts/usuario")
            .then(function (res) {
                setCurrentUser(true);
            })
            .catch(function (error) {
                setCurrentUser(false);
                navigate('/login');
            });
    }, []);

    useEffect(() => {
        client.get("/accounts/usuario")
            .then(function (res) {
                setUser(res.data.user); // Carregar o usuário inicialmente
            });
    }, [user]);

    async function submitLogout(e: { preventDefault: () => void; }) {
        e.preventDefault();
        setIsLoading(true);
        await client.post("accounts/logout", { withCredentials: true })
            .then(function (res) {
                setCurrentUser(false);
                navigate('/');
            });
        setIsLoading(false);
    }

    if (!currentUser) {
        return navigate('/login');
    }

    return (
        <>
            <Nav_bar />
            {user && (
                <div>
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


                            </div>
                            <div className="mb-3">
                                <PasswordValidation userEmail={user.email} />
                            </div>

                        </div>
                    </div>

                    <div className="col d-flex justify-content-center my-5" id="col">
                        <div className="row-fluid d-flex p-0 mt-0" id="row2">
                            <div className="me-3">
                            </div>
                            <form onSubmit={e => submitLogout(e)}>
                                <Button type="submit" variant="danger" style={{width: "60px", height: "40px"}} disabled={isLoading}>{isLoading ? (<Spinner animation="border" />) : (<p className="m-0">Log out</p>)}</Button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {/* div provisória para deixar o footer na posição correta */}
            <div className="mb-5" style={{ height: "20px" }}></div>

            <Footer />
        </>
    );
}