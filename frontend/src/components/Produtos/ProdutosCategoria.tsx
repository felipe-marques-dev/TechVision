import { useEffect, useState } from "react";
import { Produto } from "../../types/Produto";
import { AxiosResponse } from "axios";
import { client } from "../../services/client";
import { useParams } from "react-router-dom";
import ProdutoCard from "./ProdutoCard";
import { H3 } from "../../styles/Carrossel/lista";

export default function ProdutosCategoria(){
    const [produto, setProdutos] = useState<Produto[]>([]);
    const { name } = useParams<{name: string}>()

    useEffect(() => {
        const loadProdutos = async () => {
            try {
                const response: AxiosResponse<Produto[]> = await client.get(`produtos/categories-filter/${name}`);
                console.log(response.data);
                setProdutos(response.data.products);
                console.log(produto);
            } catch (error) {
                console.log("ERRO", error);
            }
        };

        loadProdutos(); // Chama a função loadProdutos ao montar o componente ou quando "name" mudar
    }, [name]); 
    
    return (
        <div className="container my-4">
            <H3 className="text-center mb-4">{name}</H3>
            <div className="row g-4"> {/* g-4 para espaçamento consistente */}
                {produto.map(produtos => (
                    <div className="col-6 col-md-4 col-lg-3" key={produtos.url_name}> {/* Colunas responsivas */}
                        <ProdutoCard 
                            url_name={produtos.url_name} 
                            price={produtos.price} 
                            foto_1={produtos.foto_1} 
                            description={produtos.description} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
    
}