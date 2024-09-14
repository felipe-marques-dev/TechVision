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
      <nav className="navbar navbar-expand-lg bg-black">
        <Div className="container-fluid" id="header">
          <Div className="collapse navbar-collapse d-flex" id="navbarSupportedContent" >
          <Div className="navbar-brand" ><Logo /></Div>
            <form className="d-flex col-5 ms-auto bg-white border border-white rounded-pill" role="search">
              <input className="form-control border border-white rounded-pill" type="search" placeholder="Pesquisar produtos..." aria-label="Search" />
              <Button className="btn bg-black border-3 border-white rounded-pill" id="btn-search" type="submit"><FaMagnifyingGlass color="white" /></Button>
            </form>
            <div className="navbar-nav ms-auto">
              <LoginNavBar loggedIn={loggedIn} userName={userInfo} />
            </div>
            <div className="navbar-nav ms-1">
            <A href="/carrinho" ><Div className="nav-link" ><FaCartShopping style={{ width: "40px"}} /></Div></A>
            </div>
            
          </Div>
        </Div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-black m-0 p-0">
        <Div className="container-fluid d-flex justify-content-center" id="header">
          <div>
          <DropDownNav></DropDownNav>
          </div>
         
          <div className="ms-3">Assinatura</div>
        </Div>
      </nav>
    </>
  )
}