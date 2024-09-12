import React, {useEffect, useState} from "react";
import { client } from "../services/client";
import { Link } from "react-router-dom";

interface Produto{
    name: string;
    product_id: number;
    price: number;
    description: string;
}

function PrincipaisProdutos(){
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        client.get('/produtos/itens')
                .then(response =>{
                    setProdutos(response.data)
        })
        .catch(error => {
            console.log("Ops! Ocorreu um erro ao buscar os produtos.")
        })
    }, []);

    console.log(produtos)
    return(
        <div>
            <h1>Principais Produtos</h1>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.product_id}>   
                         <Link to={`/produto/${produto.product_id}`}>{produto.name} {produto.description} - R${produto.price}</Link>
                    </li>
                ))}
            </ul>   
        </div>
    );

}


export default PrincipaisProdutos;