import { useEffect, useState } from "react";
import { client } from "../services/client";

export const useCurrentUser = (title: string) => {
const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    // Alterar a tag title da pagina
    document.title = title;
    // fazer a requisicao para 
    //ver o status de sessao 
    // do usuario
    client.get("/accounts/usuario")
      .then(function (res) {
        setCurrentUser(true);
      })
      .catch(function (error) {
        setCurrentUser(false);
      })
  }, []);

  return currentUser;

}