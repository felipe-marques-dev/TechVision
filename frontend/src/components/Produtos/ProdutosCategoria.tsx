import { useEffect, useState } from "react";
import { Produto } from "../../types/Produto";
import { AxiosResponse } from "axios";
import { client } from "../../services/client";
import { useParams } from "react-router-dom";
import ProdutoCard from "./ProdutoCard";
import { H3 } from "../../styles/Carrossel/lista";
import { Loading } from "../Loading";
import { toast, ToastContainer } from "react-toastify";

export default function ProdutosCategoria(){
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const { name } = useParams<{name: string}>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        document.title = `${name}`;
        const loadProdutos = async () => {
            try {
                const response: AxiosResponse<Produto[]> = await client.get(`produtos/categories-filter/${name}`);
                setProdutos(response.data.products);
            } catch (error) {
                toast.error("Não foi possivel carregar os produtos");
            }
        };

        loadProdutos(); // Chama a função loadProdutos ao montar o componente ou quando "name" mudar
        setIsLoading(false); 
    }, [name]); 
    
    return (
        <>
        <ToastContainer draggable/>
<div className="container my-4" style={{minHeight: "70vh"}}>
            <H3 className="text-center mb-4 d-flex justify-content-center">{name}</H3>
        {!isLoading || produtos ?  
        (
            <div className="row justify-content-md-start"> {/* g-4 para espaçamento consistente */}
                {produtos.map(produtos => (
                    <div className="col-md-auto d-flex justify-content-center" key={produtos.url_name}> {/* Colunas responsivas */}
                        <ProdutoCard 
                            url_name={produtos.url_name} 
                            price={produtos.price} 
                            foto_1={produtos.foto_1} 
                            description={produtos.description} 
                        />
                    </div>
                ))}
            </div>
        ) : (<Loading height="10vh" withPhrase={true}/>) }
</div>
</>
    );
    
}