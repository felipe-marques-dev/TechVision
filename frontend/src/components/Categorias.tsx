import { useEffect, useState } from "react";
import { Nav_bar } from "../components/NavBar/Navbar";
import '../../styles/Produto Individual/ProdutoIndividual.css';
import { useParams } from "react-router-dom";
import { pegarProdutoIndividual } from "./pegarProdutos";

export interface Produto {
    name: string;
    product_id: number;
    category: string;
    sub_category: string;
    description: string;
    url_name: string;
    estoque: number;
    price: number;
    promotion: boolean;
    foto_1: string;
}



export function Categotria() {
    const { url_name } = useParams<{ url_name: string }>();
    const url_product = url_name?.toString();
    const [produtos, setProdutos] = useState<Produto | null>(null);
    const [imgPrincipal, setImgPrincipal] = useState<string>("");


    useEffect(() => {
        const loadProdutos = async () => {
            const data = await pegarProdutoIndividual(`/produtos/itens/${url_product}/`);
            setProdutos(data);
            if (data) {
                setImgPrincipal(data.foto_1); // Inicializa com a foto principal
            }
        };
        loadProdutos();
    }, [url_product]);

    const handleImageClick = (img: string) => {
        setImgPrincipal(img);
    };

    return (
        <>
            <Nav_bar />
            <div className="container-fluid">
                <div className="col" id="produtoInd">
                    {produtos ? (
                        <div className="row" key={produtos.url_name}>
                            <div className="col-sm-2" id="img-left">
                                {produtos.foto_2 && (
                                    <a className="card w-50" href="#" onClick={() => handleImageClick(imgSrc2)}>
                                        <img className="img-left" src={produtos.foto_2} alt="Foto 2" />
                                    </a>
                                )}
                                {produtos.foto_3 && (
                                    <a className="card w-50" href="#" onClick={() => handleImageClick(imgSrc3)}>
                                        <img className="img-left" src={produtos.foto_3} alt="Foto 3" />
                                    </a>
                                )}
                                {produtos.foto_4 && (
                                    <a className="card w-50" href="#" onClick={() => handleImageClick(imgSrc4)}>
                                        <img className="img-left" src={produtos.foto_4} alt="Foto 4" />
                                    </a>
                                )}
                            </div>
                            <div className="col">
                                <img src={imgPrincipal || produtos.foto_1} id="img-prod" alt="Foto Principal" />
                            </div>
                            <div className="col" id="part2">
                                <p id="tituloInd">{produtos.name}</p>
                                <p className="preco-anterior" id="preco-anterior">
                                    R${(produtos.price * 1.35).toFixed(2)}
                                </p>
                                <p className="preco" id="preco-pdts">R${produtos.price.toFixed(2)}</p>
                                <p className="descricao" id="descricao-pdts">{produtos.description}</p>
                                <div className="row">
                                    <button className="btn" id="add-cart-pdt">
                                        Adicionar ao carrinho
                                    </button>
                                    <button className="btn" id="add-cart-pdt">
                                        Comprar Agora
                                    </button>
                                </div>
                            </div>
                            <div className="mt-5 d-flex justify-content-center">
                                <div className="row" id="border-top-line">
                                    <div className="col-4"><img src={`/images/${ico_entregas}`} id="ico" /> Entregas em 24h </div>
                                    <div className="col-4"><img src={`/images/${ico_cartao}`} id="ico" /> Parcelamos em até 10x sem juros </div>
                                    <div className="col-4"><img src={`/images/${ico_cadeado}`} id="ico" /> Site 100% seguro </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>Não há produtos disponíveis.</p>
                    )}
                </div>
            </div>
        </>
    );
}
