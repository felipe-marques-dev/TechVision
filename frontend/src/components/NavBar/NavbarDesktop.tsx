import React, { useEffect, useState } from "react"
import { Div, Button, A } from "../../styles/NavBar/navbar"
import { Logo } from "../Logo"
import { LoginNavBar, MinhaContaNavBar } from "./AuthenticateNavBar"
import { client } from "../../services/client"
import { FaCartShopping } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import DropDownNav from "./DropDownNav"
import { useMediaQuery } from "@chakra-ui/react"
import { NavMenuMobile } from "./NavbarMobile"
import { SearchBar } from "../SearchBar"

export function NavbarDesktop() {

  const [userInfo, setUserInfo] = useState<[]>([]);
  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    client.get('accounts/usuario')
      .then(response => {
        setUserInfo(response.data['user']['first_name'])
        setLoggedIn(true)
      })
      .catch(response => {
        console.log("Erro ao capturar usuario")
        setLoggedIn(false)
      })
  }, [])

  // retorna a interface do site em formato para computador
  return (
    <div className="bg-black">
      <nav className="navbar" >
        <Div className="container-fluid" id="header">
          <Div className="collapse navbar-collapse d-flex justify-content-between" >
            {/* Logo */}
            <Div className="navbar-brand" ><Logo /></Div>
            <div className="ms-4">
              <DropDownNav></DropDownNav>
            </div>
          <div className="ms-1"><A className="m-0 p-0" href="/assinatura" style={{fontSize: "22px"}}>Assinatura</A></div>
            {/* Barra de pesquisa */}
            <div className="w-50" style={{minWidth: '25%'}}>
              <SearchBar width="75"/>
            </div>
            {/* Mostra o nome do usuario */}
              <LoginNavBar loggedIn={loggedIn} userName={userInfo} />
            {/* Carrinho */}
            <div className="navbar-nav ms-1">
              <A href="/carrinho" ><Div className="nav-link" ><FaCartShopping style={{ width: "40px" }} /></Div></A>
            </div>

          </Div>
        </Div>
      </nav>
      <nav className="navbar m-0 p-0">
        {/* Categorias */}
        <Div className="container-fluid d-flex justify-content-center" id="header">
          
          
          {/* Outras opcoes */}
        </Div>
      </nav>
    </div >


  )
}