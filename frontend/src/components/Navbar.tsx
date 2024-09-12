import React from "react"
import  { Div, Button, A } from "../styles/NavBar/navbar"
import { Logo } from "./Logo"

export function Navbar(){

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary m-0 p-0">
            <Div className="container-fluid" id="header">
            <Div className="navbar-brand" ><Logo/></Div>
            <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </Button>
            <Div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <A href="/"> <Div className="nav-link" aria-current="page" >Home</Div></A>
              </li>
              <li className="nav-item">
                <A href="/"><Div className="nav-link"  >Minha conta</Div> </A>
              </li>
              <li className="nav-item">
                <A href="/" ><Div className="nav-link" >Carrinho</Div></A>
              </li>
              <li className="nav-item dropdown">
                <Div className="nav-link dropdown-toggle"  role="Button" data-bs-toggle="dropdown" aria-expanded="false"  >
                  Categorias
                </Div>
                <ul className="dropdown-menu" id="dropdown-menu">
                  <li><Div className="dropdown-item" >Eletrônicos</Div></li>
                  <li><Div className="dropdown-item" >Planos - Tv box</Div></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="pesquisar..." aria-label="Search" />
              <Button className="btn" id="btn-search" type="submit">Pesquisar</Button>
            </form>
          </Div>
            </Div>
            </nav>
        </>
    )
}