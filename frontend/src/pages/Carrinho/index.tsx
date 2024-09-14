import { useEffect, useState } from "react";
import { Nav_bar } from "../../components/NavBar/Navbar";
import { client } from "../../services/client";
import { useNavigate } from "react-router-dom";

export function Carrinho(){
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(false);
  
  useEffect(() => {
    // Alterar a tag title da pagina
    document.title = 'Carrinho';
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
  return(
    <>
    <Nav_bar/>
    <h1>Carrinho</h1>
    </>
    
  );
}

function setCurrentUser(arg0: boolean) {
  throw new Error("Function not implemented.");
}
