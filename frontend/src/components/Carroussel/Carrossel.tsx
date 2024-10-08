import {useEffect, useState} from "react";

import { Carousel } from "react-bootstrap";
import { H3 } from  "../../styles/Carrossel/lista";

import { ImageLoader } from '../ImageLoader';
import { Carroussel } from "../../types/Carroussel";
// Tipos requeridos pelo useState

function Carrossel(){
    const [carroussel, setCarroussel] = useState<Carroussel[]>([]);
    const [errors, setErrors] = useState<Map<string, boolean>>(new Map());  // Custom hook que leva até a página do produto
    
    // faz a busca dos produtos
    useEffect(() => {
        const loadCarroussel = async () => {
          const {carroussel, errors } = await pegarCarroussel('/carroussel');
          setCarroussel(carroussel);
          setErrors(errors);
        }
        loadCarroussel();
        }, []);


    // Retorna o carrossel com os produtos ( iteração pelo .map())
    return (
        <div className="mt-auto" style={{ zIndex: -1 }}>
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
                {produtos_list.slice(0,5).map(produto => (
                    <Carousel.Item
                        key={produto.url_name}
                        style={{
                            height: '400px',
                            marginBottom: '2vh',
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
                                width: '100%',
                                minWidth: '350px',
                                margin: '0 auto',
                                objectFit: 'contain',  // Ajusta a imagem sem cortar
                                objectPosition: 'center',  // Centraliza a imagem
                            }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
    

}


export default Carrossel;