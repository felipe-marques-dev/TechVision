import { Button } from "react-bootstrap";
import { client } from "../services/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav_bar } from "../components/NavBar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { DialogDemo } from "../components/Edit/EditProfile";
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
    }, []);

    useEffect(() => {
        document.title = 'Perfil';
    });

    const handleProfileUpdate = (updatedUser: Usuario) => {
        setUser(updatedUser); // Atualiza o estado do usuário com as novas informações
    };

    function submitLogout(e: { preventDefault: () => void; }) {
        e.preventDefault();
        client.post("accounts/logout", { withCredentials: true })
            .then(function (res) {
                setCurrentUser(false);
                navigate('/');
            });
    }

    if (!currentUser) {
        return null; // Não redirecionar diretamente, apenas retornar null
    }

    return (
        <>
            <Nav_bar />
            {user && (
                <div className="container d-flex justify-content-center object-fit-fill" id="container">
                    <div className="row w-100 mx-auto">
                        <h6 >Nome</h6>
                        <div className="d-flex mx-auto">
                            <h1 className="">{user.first_name}</h1>
                            <h1 className="ms-2">{user.last_name}</h1>
                        </div>

                        <div className="mb-3">
                            <h6>Email</h6>
                            <h1>{user.email}</h1>

                            <h6>Senha</h6>
                            <div>
                                <input className="d-flex" type="password" defaultValue={"********"} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="col d-flex justify-content-center my-5" id="col">
                <div className="row-fluid d-flex p-0 mt-0" id="row2">
                    <div className="me-3">
                        <DialogDemo onProfileUpdate={handleProfileUpdate} /> 
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
