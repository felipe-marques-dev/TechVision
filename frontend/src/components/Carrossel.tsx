import {useEffect, useState} from "react";
import { client } from "../services/client";
import { Carousel } from "react-bootstrap";
import { H3 } from  "../styles/Carrossel/lista";
import { useNavigateProducts } from "../hooks/useNavigateProducts";

// Tipos requeridos pelo useState
interface Produto{
    name: string;
    product_id: number;
    price: number;
    url_name: string;
    foto_1: string;
}

function Carrossel(){
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const { goToProduct } = useNavigateProducts();  // Custom hook que leva até a página do produto

    // faz a busca dos produtos
    useEffect(() => {
        client.get('/produtos/itens')
                .then(response =>{
                    setProdutos(response.data)   // Salva os produtos na variável produtos
        })
        .catch(error => {
            const erro: string = ("Ops! Ocorreu um erro ao buscar os produtos.") 
            console.log("Ops! Ocorreu um erro ao buscar os produtos.")

        })
    }, []);

    // Retorna o carrossel com os produtos ( iteração pelo .map())
    return(
      <div className="mt-auto" style={{zIndex: -1}}>
        <div id="texto-titulo" className="col d-flex justify-content-center fs-1 p-0 m-0">
        <H3 id="text-titulo" className="justify-content-center">Em destaque</H3>
          </div>



                <Carousel  className="carousel carousel-dark slide justify-content-center">
                    {produtos.map(produto => (
                        <Carousel.Item 
                            key={produto.url_name} 
                            style={{ 
                                height: '400px' 
                                }}
                        >

                            <img 
                                onClick={() => goToProduct(produto.url_name)} 
                                src={produto.foto_1}
                                className="w-25" 
                                style={{
                                    cursor: 'pointer',
                                    minHeight: "auto",
                                    minWidth: '400px',
                                    width:'100%',
                                    margin: '0 auto',
                                    display: 'block',
                                    zIndex: ""
                                }}
                            />

                        </Carousel.Item>
                        ))}
                </Carousel>

        </div>

    );

}


export default Carrossel;