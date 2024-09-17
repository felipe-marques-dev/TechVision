import { useEffect, useState } from "react";
import { Nav_bar } from "../../components/NavBar/Navbar";
import { client } from "../../services/client";
import { useNavigate } from "react-router-dom";
import '../../styles/Carrinho/carrinho.css';
import { Input } from "@chakra-ui/react";

interface Produto {
    name: string;
    product_id: number;
    price: number;
    description: string;
    url_name: string;
    foto_1: string;
    foto_2: string;
    foto_3: string;
    foto_4: string;
}

export function ProdutoIndividual() {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<boolean>(false);
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const ico_carrinho = 'ico-carrinho.png';

    // Verificar sessão do usuário
    useEffect(() => {
        document.title = 'Produto';
        client.get("/accounts/usuario")
            .then(response => {
                setCurrentUser(true);
                // Carregar produtos quando o usuário estiver autenticado
                client.get(`/produtos/itens${produtos.url_name}`)
                    .then(response => {
                        setProdutos(response.data);
                    })
                    .catch(error => {
                        console.log("Erro ao buscar produtos", error);
                    });
            })  
            .catch(error => {
                setCurrentUser(false);
                navigate('/login');
            });
    }, [navigate]);

    return (
        <>
            <Nav_bar />
            {currentUser && (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            {produtos.length > 0   ? (
                                produtos.map(produto => (
                                    <div className="cart-item row align-items-center" key={produto.url_name}>
                                        <div className="text-center" id="produtoInd">
                                            <div className="row">
                                                <div className="col-sm-2" id="img-left">
                                                    {produto.foto_2 && <a className="card w-50" href="#"> <img className="img-left" src={produto.foto_2} alt="Foto 2" /> </a>}
                                                    {produto.foto_3 && <a className="card w-50" href="#"> <img className="img-left" src={produto.foto_3} alt="Foto 3" /> </a>}
                                                    {produto.foto_4 && <a className="card w-50" href="#"> <img className="img-left" src={produto.foto_4} alt="Foto 4" /> </a>}
                                                </div>
                                                <div className="col-5">
                                                    <img src={produto.foto_1} id="img-prod" alt="Foto 1" />
                                                </div>
                                                <div className="col-5">
                                                    <p id="tituloInd">{produto.name}</p>
                                                    <p className="preco-anterior" id="preco-anterior">R${(produto.price * 1.35).toFixed(2)}</p> {/* Exemplo de preço anterior */}
                                                    <p className="preco" id="preco-pdts">R${produto.price.toFixed(2)}</p>
                                                    <p className="descricao" id="descricao-pdts">{produto.description}</p>
                                                    <button className="btn" id="add-cart-pdt">
                                                        <img src={`/images/${ico_carrinho}`} id="ico-carrinho-pdt" alt="Carrinho" /> Adicionar ao carrinho
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Não há produtos disponíveis.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
