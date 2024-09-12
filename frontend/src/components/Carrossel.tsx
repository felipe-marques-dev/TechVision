import React, {useEffect, useState} from "react";
import { client } from "../services/client";
import { Link } from "react-router-dom";
import { Carousel, CarouselItem } from "react-bootstrap";
import { H3 } from  "../styles/Carrossel/lista";
interface Produto{
    name: string;
    product_id: number;
    price: number;
}

function Carrossel(){
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const img = "teclado.jpg"

    
    useEffect(() => {
        client.get('/produtos/itens')
                .then(response =>{
                    setProdutos(response.data)
        })
        .catch(error => {
            console.log("Ops! Ocorreu um erro ao buscar os produtos.")
        })
    }, []);

  
    console.log(produtos)
    return(
      <div className="text-center">
        <div id="texto-titulo" className="col d-flex justify-content-center fs-1 p-0 m-0" >
            <H3 id="text-titulo">Em destaque</H3>
          </div>



                <Carousel  className="carousel carousel-dark slide">
                    {produtos.map(produto => (
                        <Carousel.Item key={produto.product_id} style={{ height: '400px' }}>
                            <Link to={`/produto/${produto.product_id}`}><img src={produto.foto_1} className=" w-25" style={{  maxHeight: '100%', width:'auto', margin: '0 auto', display: 'block'}}/></Link>
                        </Carousel.Item>
                        ))}
                </Carousel>

        </div>

    );

}


export default Carrossel;