import React, { useEffect, useState } from "react";
import { client } from "../../services/client";
import '../../styles/PrincipaisProdutos/principaisProdutos.css'; // Importa o arquivo CSS
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { useNavigateProducts } from "../../hooks/useNavigateProducts";
import { H3 } from "../../styles/Carrossel/lista";
import { Produto } from "../../types/Produto";
import ProdutoCard from "./ProdutoCard";

type promotionProps = {
    promotion: boolean;
}

function PrincipaisProdutos(props: promotionProps) {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const { goToProduct } = useNavigateProducts();
    useEffect(() => {
        client.get('/produtos/itens')
            .then(response => {
                setProdutos(response.data)
            })
            .catch(error => {
                console.log("Ops! Ocorreu um erro ao buscar os produtos.")
            })
    }, []);

    React.useEffect(() => {
        new Swiper('.swiper-container', {
            slidesPerView: 1, // Exibe 3 slides visíveis de cada vez
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
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
            },
        });
    }, []);

    return (
        <div>
            <div className="text-center">
                <div id="texto-titulo" className="col d-flex justify-content-center fs-1 p-0 m-0 h-25">
                    <H3 id="text-titulo" className="d-flex justify-content-center">{props.titulo}</H3>
                </div>
            </div>
            <div className="swiper-container mt-4">
                <div className="swiper-wrapper">
                    {props.promotion ? produtos.filter(produto => produto.promotion).map(produtos =>
                        <ProdutoCard url_name={produtos.url_name} price={produtos.price} foto_1={produtos.foto_1} description={produtos.description} />
                    ) :
                        produtos.map(produtos =>
                            <ProdutoCard url_name={produtos.url_name} price={produtos.price} foto_1={produtos.foto_1} description={produtos.description} />
                        )}
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </div>
    );
}


export default PrincipaisProdutos;
