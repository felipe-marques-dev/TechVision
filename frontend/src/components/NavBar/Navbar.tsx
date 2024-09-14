import React, { useEffect, useState } from "react"
import { Div, Button, A } from "../../styles/NavBar/navbar"
import { Logo } from "../Logo"
import { LoginNavBar, MinhaContaNavBar } from "./AuthenticateNavBar"
import { client } from "../../services/client"
import { FaCartShopping } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import DropDownNav from "./DropDownNav"

export function Nav_bar() {

  const [userInfo, setUserInfo] = useState<[]>([]);
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  console.log(userInfo)
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

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary m-0 p-0">
        <Div className="container-fluid" id="header">
          <Div className="navbar-brand" ><Logo /></Div>
          <Div className="collapse navbar-collapse d-flex " id="navbarSupportedContent" >
                <DropDownNav></DropDownNav>
                <ul className="dropdown-menu" id="dropdown-menu">
                  <li><Div className="dropdown-item" >Eletrônicos</Div></li>
                  <li><Div className="dropdown-item" >Planos - Tv box</Div></li>
                </ul>
            <form className="d-flex col-md-3 ms-md-auto" role="search">
              <input className="form-control me-2" type="search" placeholder="Pesquisar..." aria-label="Search" />
              <Button className="btn" id="btn-search" type="submit"><FaMagnifyingGlass /></Button>
            </form>
            <div className="navbar-nav col-md-3 ms-md-auto">
              <LoginNavBar loggedIn={loggedIn} userName={userInfo} />
              <A href="/carrinho" ><Div className="nav-link" ><FaCartShopping style={{width: "40px", marginTop: '10px'}} /></Div></A>
            </div>  
          </Div>
        </Div>
      </nav>
    </>
  )
}