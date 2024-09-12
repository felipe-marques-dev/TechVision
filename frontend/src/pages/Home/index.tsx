import React from "react"; 
import Carrossel from "../../components/Carrossel";
import { Navbar } from "../../components/Navbar";
import PrincipaisProdutos from "../../components/PrincipaisProdutos";
export function Home(){
    return(
        <div>
            <Navbar />
            <Carrossel />
            <PrincipaisProdutos />
        </div>
        
    )
}


