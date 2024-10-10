import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
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
        <div className="m-0 p-0 border-0" style={{ zIndex: -2, minWidth: "100%", height: "100%", }}>

            <Carousel
                className="carousel carousel-dark slide m-0 p-0 d-flex justify-content-center border-0"
            >
                {carroussel.slice(0, 5).map(carroussel => (
                    <Carousel.Item
                        interval={5000}
                        key={carroussel.url}
                        style={{
                            height: '450px',
                        }}
                    >
                        <a href={carroussel.url}>
                            <img
                                src={carroussel.foto}
                                className="d-flex justify-content-center p-0 m-0 border-0"
                                erro={errors.get(carroussel.url) || false}
                                style={{
                                    cursor: 'pointer',
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    zIndex: -2
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