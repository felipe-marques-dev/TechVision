import {useEffect, useState} from "react";

import { Carousel } from "react-bootstrap";
import { H3 } from  "../styles/Carrossel/lista";

import { ImageLoader } from './ImageLoader';
import { pegarProdutos } from './Produtos/pegarProdutos'
// Tipos requeridos pelo useState
interface Produto{
    name: string;
    product_id: number;
    price: number;
    url_name: string;
    foto_1?: string;
    foto_2?: string;
    foto_3?: string;
    foto_4?: string;
}

function Carrossel(){
    const [produtos_list, setProdutos] = useState<Produto[]>([]);
    const [errors, setErrors] = useState<Map<string, boolean>>(new Map());  // Custom hook que leva até a página do produto
    
    // faz a busca dos produtos
    useEffect(() => {
        const loadProdutos = async () => {
          const {produtos, errors } = await pegarProdutos('/produtos/itens/');
          setProdutos(produtos);
          setErrors(errors);
        }
        loadProdutos();
        }, []);


    // Retorna o carrossel com os produtos ( iteração pelo .map())
    return(
      <div className="mt-auto" style={{zIndex: -1}}>
        <div id="texto-titulo" className="col d-flex justify-content-center fs-1 p-0 m-0 h-25">
        <H3 id="text-titulo" className="d-flex justify-content-center mt-5">Em destaque</H3>
          </div>



                <Carousel  
                    className="carousel carousel-dark slide justify-content-center" 
                    style={{
                        marginTop: "3vh",
                        alignItems: 'end',
                    }}
                >
                    {produtos_list.map(produto => (
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