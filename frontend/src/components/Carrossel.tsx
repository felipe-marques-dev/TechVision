import {useEffect, useState} from "react";
import { client } from "../services/client";
import { Carousel } from "react-bootstrap";
import { H3 } from  "../styles/Carrossel/lista";
import { useNavigateProducts } from "../hooks/useNavigateProducts";
import { ImageLoader } from './ImageLoader';
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
    const [errors, setErrors] = useState<Map<string, boolean>>(new Map());  // Custom hook que leva até a página do produto
    
    // faz a busca dos produtos
    useEffect(() => {
        const pegarProdutos = async () => {
            try {
              const response = await client.get('/produtos/itens');
              const produtosData = response.data;
              const newErrors = new Map<string, boolean>(); // inicializa o mapa de erros

              // verifica se a imagem existe para cada produto
              for (const produto of produtosData) {
                try {
                 await client.get(produto.foto_1);
                } catch {
                  newErrors.set(produto.url_name, true) // marca o erro para esta imagem
                }
              }
              setErrors(newErrors);
              setProdutos(produtosData);
            } catch (error) {
              console.error('Erro ao buscar produtos:', error);
            }
          };
      
          pegarProdutos();
        }, []);


    // Retorna o carrossel com os produtos ( iteração pelo .map())
    return(
      <div className="mt-auto" style={{zIndex: -1}}>
        <div id="texto-titulo" className="col d-flex justify-content-center fs-1 p-0 m-0 h-25">
        <H3 id="text-titulo" className="d-flex justify-content-center">Em destaque</H3>
          </div>



                <Carousel  
                    className="carousel carousel-dark slide justify-content-center" 
                    style={{
                        marginTop: "3vh",
                        alignItems: 'end',
                    }}
                >
                    {produtos.map(produto => (
                        <Carousel.Item 
                            key={produto.url_name} 
                            style={{ 
                                height: '400px',
                                marginBottom: '2vh' 
                                }}
                        >
                            <ImageLoader 
                                onClick={produto.url_name} 
                                src={produto.foto_1}
                                className="w-25 d-flex justify-content-center"
                                erro={errors.get(produto.url_name) || false}
                                style={{
                                    cursor: 'pointer',
                                    maxHeight: '400px',
                                    width:'100%',
                                    minWidth: '350px',
                                    margin: '0 auto',
                                }}
                            />

                        </Carousel.Item>
                        ))}
                </Carousel>

        </div>

    );

}


export default Carrossel;