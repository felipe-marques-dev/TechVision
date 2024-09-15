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
      <div className="text-center">
        <div id="texto-titulo" className="col d-flex justify-content-center fs-1 p-0 m-0" >
        <H3 id="text-titulo justify-content-center">Em destaque</H3>
          </div>



                <Carousel  className="carousel carousel-dark slide justify-content-center" style={{zIndex: "-1"}}>
                    {produtos.map(produto => (
                        <Carousel.Item 
                            key={produto.product_id} 
                            style={{ 
                                height: '400px' 
                                }}
                        >

                            <img 
                                onClick={() => goToProduct(produto.product_id)} 
                                src={produto.foto_1}
                                className="w-25" 
                                style={{
                                    cursor: 'pointer',
                                    maxHeight: '100%',
                                    width:'auto',
                                    margin: '0 auto',
                                    display: 'block',
                                }}
                            />

                        </Carousel.Item>
                        ))}
                </Carousel>

        </div>

    );

}


export default Carrossel;