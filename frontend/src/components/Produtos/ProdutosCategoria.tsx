import { useState } from "react";
import { Produto } from "../../types/Produto";
import { AxiosResponse } from "axios";
import { client } from "../../services/client";
import { useParams } from "react-router-dom";


export default function ProdutosCategoria(){
    const [produtos, setProdutos] = useState<Produto | null>(null)
    const { name } = useParams<{name: string}>()

    const loadProdutos = async () => {
        try {
            const response: AxiosResponse<Produto> = await client.get(`categories-filter/${name}`);
            setProdutos(response.data)
        }catch(error){
            return console.log("ERRO")
        }
    }

    loadProdutos
    return(
        <h1>{name}</h1>
    )
}