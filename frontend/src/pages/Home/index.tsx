import React from "react"; 
import ListaProdutos from "../../components/ListaProdutos";
import { Navbar } from "../../components/Navbar";
export function Home(){
    return(
        <div>
            <Navbar />
            <h1>Home</h1>
            <ListaProdutos />
        </div>
        
    )
}


