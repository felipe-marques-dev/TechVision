import React from "react"
export function Navbar(){

    const logo_atena = 'logo_atena.png'
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid" id="header">
            <a className="navbar-brand" href="index.html"><img className="logo" src={`/images/${logo_atena}`}/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="conta.html" >Minha conta</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="carrinho.html" >Carrinho</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: white; font-size: 20px;" >
                  Categorias
                </a>
                <ul className="dropdown-menu" id="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Eletrônicos</a></li>
                  <li><a className="dropdown-item" href="#">Planos - Tv box</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="pesquisar..." aria-label="Search">
              <button className="btn" id="btn-search" type="submit">Pesquisar</button>
            </form>
          </div>
            </div>
            </nav>
        </>
    )
}