import React from "react"; 
import ListaProdutos from "../../components/ListaProdutos";
import { Navbar } from "../../components/Navbar";
export function Home(){
    return(
        <div>
            <Navbar />
            <ListaProdutos />
        </div>
        
    )
}


