import React from "react"; 
import Carrossel from "../../components/Carrossel";
import { Nav_bar } from "../../components/NavBar/Navbar";
import PrincipaisProdutos from "../../components/Produtos/PrincipaisProdutos";
export function Home(){
    return(
        <div>
            <Nav_bar />
            <Carrossel />
            <PrincipaisProdutos />
        </div>
        
    )
}


