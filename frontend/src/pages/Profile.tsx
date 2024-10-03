import { Button } from "react-bootstrap";
import { client } from "../services/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav_bar } from "../components/NavBar/Navbar";
import { Footer } from "../components/Footer";
import { DialogDemo } from "../components/Edit/EditProfile";
import { PasswordValidation } from "../components/Edit/PasswordValidation";
import '../styles/profile.css';


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
                <div className="container d-flex justify-content-center" id="container">
                  <div className="row">
                  <h6>Nome</h6>
                      <div className="d-flex">
                          <h1 className="mb-0">{user.first_name}</h1>
                          <h1 className="mb-0 ms-2">{user.last_name}</h1>
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
            
            <div className="col d-flex justify-content-center p-3 mb-5" id="col">
                <div className="row-fluid d-flex" id="row2">
                    <div className="me-3">
                        <DialogDemo />
                    </div>
                    <div className="me-3">
                        <PasswordValidation />
                    </div>
                    <form className="d-flex align-items-center" onSubmit={e => submitLogout(e)}>
                        <Button type="submit" variant="danger">Log out</Button>
                    </form>
                </div>
            </div>
            
            <Footer />
                
        </>
    );
}
 