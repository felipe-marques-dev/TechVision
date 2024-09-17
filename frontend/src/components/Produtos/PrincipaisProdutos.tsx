import React, {useEffect, useState} from "react";
import { client } from "../../services/client";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../../styles/PrincipaisProdutos/principaisProdutos.css'; // Importa o arquivo CSS
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { useNavigateProducts } from "../../hooks/useNavigateProducts";
import { H3 } from "../../styles/Carrossel/lista";

interface Produto{
    name: string;
    product_id: number;
    price: number;
    description: string;
    url_name: string;
    foto_1: string;
}

type ProdutosProps = {
    promotion: boolean;
    titulo: string;
}
function PrincipaisProdutos(props: ProdutosProps){
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const {goToProduct} = useNavigateProducts();
    useEffect(() => {
        client.get('/produtos/itens')
                .then(response =>{
                    setProdutos(response.data)
        })
        .catch(error => {
            console.log("Ops! Ocorreu um erro ao buscar os produtos.")
        })
    }, []);


    let produtoPrice: number = 0
    
    React.useEffect(() => {
        new Swiper('.swiper-container', {
            slidesPerView: 3, // Exibe 3 slides visíveis de cada vez
            spaceBetween: 10, // Espaço entre os slides
            loop: true, // Faz o carrossel rodar em loop infinito
            navigation: {
                nextEl: '.swiper-button-next', // Seletores para setas de navegação
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination', // Paginação para indicar mais slides
                clickable: true,
            },
            breakpoints: {
                // Responsividade
                640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
    }, []);


    const img = "ico-carrinho.png"
    return(
            <div>
            <div className="text-center">
                    <div id="texto-titulo" className="col d-flex justify-content-center fs-1 p-0 m-0 h-25" >
                        <H3 id="text-titulo"  className="d-flex justify-content-center ">{props.titulo}</H3>
                </div>
            </div>
            <div className="swiper-container mt-4">
                <div className="swiper-wrapper">
                {produtos.map(produto =>  (
                                <Card className="swiper-slide" onClick={() => goToProduct(produto.url_name)} key={produto.url_name} style={{maxWidth: '300px', maxHeight: '420px', minHeight: '420px'}}>
                                    <Card.Img variant="top" style={{width: "auto", maxHeight: "240px ", padding: '10px'}} src={produto.foto_1} />
                                    <Card.Body>
                                    <Card.Text
                                    className="fs-4"
                                    style={{
                                        color: 'gray',
                                        textDecoration: 'line-through',
                                        marginBottom: '0px',
                                        marginTop: '1vh'
                                    }}
                                    >
                                       {`R$${((1.3 * produto.price).toFixed(0))}`}
                                    </Card.Text>
                                    <Card.Title 
                                    className="fs-2"
                                    >
                                        {`R$${((produto.price.toFixed(2)).toString()).replace('.', ',')}`}
                                    </Card.Title>
                                    
                                    <Card.Text>
                                       {produto.description.length > 50 ? `${produto.description.slice(0, 50)}...`: `${produto.description}`}
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                ))} 
                <div className="swiper-pagination"></div>
            </div>
            </div> 
            </div>
    );
    
}


export default PrincipaisProdutos;