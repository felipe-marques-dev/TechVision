import { Button, Container, Navbar } from "react-bootstrap";
import { client } from "../../services/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    // Alterar a tag title da pagina
    document.title = 'Login';
    // fazer a requisicao para 
    //ver o status de sessao 
    // do usuario
    client.get("/accounts/usuario")
      .then(function (res) {
        setCurrentUser(true);
      })
      .catch(function (error) {
        setCurrentUser(false);
        navigate('/login');
      })
  }, []);


  function submitLogout(e: { preventDefault: () => void; }) {
    e.preventDefault();
    client.post(
      "accounts/logout",
      { withCredentials: true }
    ).then(function (res) {
      setCurrentUser(false);
      navigate('/login');
    });
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Authentication App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <form onSubmit={e => submitLogout(e)}>
                <Button type="submit" variant="light">Log out</Button>
              </form>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="center">
        <h2>You're logged in!</h2>
      </div>
    </div>
  );
}