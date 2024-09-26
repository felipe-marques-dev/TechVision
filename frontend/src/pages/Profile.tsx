import { Button } from "react-bootstrap";
import { client } from "../services/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav_bar } from "../components/NavBar/Navbar";
import { DialogDemo } from "../components/Edit/EditProfile";
import { PasswordValidation } from "../components/Edit/PasswordValidation";
import { EditPassword } from "../components/Edit/EditPassword";


interface Usuario {
    id: number;
    email:string;
    first_name: string;
    last_name: string;
    is_verified: boolean;
}

export function Profile() {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(false);
    const [user, setUser] = useState<Usuario | null>(null);

    useEffect(() => {
        document.title = 'Perfil';
        client.get("/accounts/usuario")
            .then(function (res) {
                setCurrentUser(true);
                setUser(res.data.user); // Assumindo que res.data é um objeto do usuário
            })
            .catch(function (error) {
                setCurrentUser(false);
                navigate('/login');
            });
    }, [navigate]);

    function submitLogout(e: { preventDefault: () => void; }) {
        e.preventDefault();
        client.post("accounts/logout", { withCredentials: true })
            .then(function (res) {
                setCurrentUser(false);
            });
    }

    if (!currentUser) {
        return null; // Não redirecionar diretamente, apenas retornar null
    }

    return (
        <>
            <Nav_bar />
            <EditPassword/>
            <div className="container">
            {user && (
                <div className="container d-flex justify-content-center">
                    <div className="row">
                        <h1>{user.first_name}</h1>
                        <h1>{user.last_name}</h1>
                    </div>
                    <h2>{user.email}</h2>
                </div>
            )}
            
            <div className="col">
                <DialogDemo/>
                <PasswordValidation />
            </div>

            <form onSubmit={e => submitLogout(e)}>
                <Button type="submit" variant="dark">Log out</Button>
            </form>
            </div>
        </>
    );
}
 