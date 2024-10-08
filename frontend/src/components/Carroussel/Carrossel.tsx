import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { H3 } from "../../styles/Carrossel/lista";
import { Carroussel } from "../../types/Carroussel";
import { pegarCarroussel } from "./pegarCarroussel";
// Tipos requeridos pelo useState

function Carrossel() {
    const [carroussel, setCarroussel] = useState<Carroussel[]>([]);
    const [errors, setErrors] = useState<Map<string, boolean>>(new Map());  // Custom hook que leva até a página do produto

    // faz a busca dos produtos
    useEffect(() => {
        const loadCarroussel = async () => {
            const { carroussel, errors } = await pegarCarroussel('/carroussel');
            setCarroussel(carroussel);
            setErrors(errors);
        }
        loadCarroussel();
    }, []);


    // Retorna o carrossel com os produtos ( iteração pelo .map())
    return (
        <div className="m-0 p-0" style={{ zIndex: -1 }}>

            <Carousel
                className="carousel carousel-dark slide justify-content-start"
                style={{
                    marginTop: "3vh",
                    alignItems: 'end',
                }}
            >
                {carroussel.slice(0, 5).map(carroussel => (
                    <Carousel.Item
                        key={carroussel.url}
                        style={{
                            height: '300px',
                            marginBottom: '2vh',
                        }}
                    >
                        <a href={carroussel.url}>
                            <img
                                src={carroussel.foto}
                                className="d-flex justify-content-center"
                                erro={errors.get(carroussel.url) || false}
                                style={{
                                    cursor: 'pointer',
                                    width: '100%',
                                    minWidth: '350px',
                                    margin: '0',
                                    objectFit: 'contain',  // Ajusta a imagem sem cortar
                                    objectPosition: 'center',  // Centraliza a imagem
                                }}
                            />
                        </a>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );


}


export default Carrossel;