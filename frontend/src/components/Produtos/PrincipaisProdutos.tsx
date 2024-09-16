import React, {useEffect, useState} from "react";
import { client } from "../../services/client";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../../styles/PrincipaisProdutos/principaisProdutos.css'; // Importa o arquivo CSS

interface Produto{
    name: string;
    product_id: number;
    price: number;
    description: string;
    url_name: string;
    foto_1: string;
}

function PrincipaisProdutos(){
    const [produtos, setProdutos] = useState<Produto[]>([]);

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
    const img = "ico-carrinho.png"
    return(
            <div>
            <div className="text-center">
                    <div id="texto-titulo" className="col d-flex justify-content-center fs-1" >
                        <h3 id="text-titulo">Principais produtos</h3>
                </div>
            </div>
            <CardGroup className="CardGroup">
          
                {produtos.map(produto => (

                          
                        <Link className="Link" to={`/produto/${produto.url_name}`}>
                                <Card className="Class" key={produto.url_name}>
                                    <Card.Img variant="top" style={{width: "310px", height: "160px"}} src={produto.foto_1} />
                                    <Card.Body>
                                    <Card.Title>{produto.name}</Card.Title>
                                    <Card.Text>
                                       {produto.price}
                                    </Card.Text>
                                    <Card.Text>
                                       {produto.description}
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <Link className="Link" to="/" ><p className="txt-carrinho"> Adicionar ao carrinho </p><small className="text-muted">Comprar agora</small></Link>
                                    </Card.Footer>
                                </Card></Link>
                ))}
            </CardGroup>
            </div> 
    );
    
}


export default PrincipaisProdutos;