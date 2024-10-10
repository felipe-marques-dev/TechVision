import { useEffect, useState } from "react";
import { client } from "../../services/client";
import { Nav_bar } from "../../components/NavBar/Navbar";
import '../../styles/Produto Individual/ProdutoIndividual.css';
import { useParams } from "react-router-dom";
import { pegarProdutoIndividual } from "./pegarProdutos";
import { Produto } from "../../types/Produto";
import { FooterDesktop } from "../Footer/FooterDesktop";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { url } from "inspector";


const ico_entregas = 'entregas.png';
const ico_cartao = 'ico-cartao.jpg';
const ico_cadeado = 'ico-cadeado.png';

export function ProdutoIndividual() {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<boolean>(false);
    const { url_name } = useParams<{ url_name: string }>();
    const url_product = url_name?.toString();
    const [produtos, setProdutos] = useState<Produto | null>(null);
    const [imgPrincipal, setImgPrincipal] = useState<string>("");
    const imgSrc2 = produtos?.foto_2 || ''; 
    const imgSrc3 = produtos?.foto_3 || ''; 
    const imgSrc4 = produtos?.foto_4 || ''; 
    const [emailUser, setEmail] = useState<string>('');
    const [carrinho, setCarrinho] = useState<{ [key: number]: number }>({});
    
    const loadProdutos = async () => {
        const data = await pegarProdutoIndividual(`/produtos/itens/${url_product}/`);
        const name = data.name.toString();
        setProdutos(data);
        if (data) {
            setImgPrincipal(data.foto_1); // Inicializa com a foto principal
        }
        document.title = name;
    };


    useEffect(() => {

 
        loadProdutos();
    }, [url_product]);

    const handleImageClick = (img: string) => {
        setImgPrincipal(img);
    };
    
    useEffect(() => {
        client.get("/accounts/usuario")
          .then(response => {
            setCurrentUser(true);
            setEmail(response.data.user.email);
          })
          .catch(error => {
            setCurrentUser(false);
          });
      }, [currentUser]);

      const handleAdd = async (product_id: number) => {
        if (emailUser) {
            if (carrinho[product_id]) {
                setCarrinho(prev => ({ ...prev, [product_id]: prev[product_id] + 1 }));
                toast.warning(`Quantidade do item aumentada! Agora você tem ${carrinho[product_id] + 1}.`, {
                    autoClose: 2000,
                });
            } else {
                setCarrinho(prev => ({ ...prev, [product_id]: 1 }));
                try {
                    await client.post('accounts/add-item/', { email: emailUser, product_id: product_id });
                    toast("Você adicionou o item ao seu carrinho!", {
                        autoClose: 2000,
                    });
                } catch (error) {
                    console.error("Erro ao adicionar item ao carrinho", error);
                    toast.error("Erro ao adicionar item ao carrinho");
                }
            }
        }
    };

    return (
        <>
        <ToastContainer 
        position="bottom-left"
        />
            <Nav_bar />
            <div className="container-fluid m-0 p-0 border-0">
                <div className="flex-wrap d-flex m-0 p-0" id="produtoInd">
                    {produtos ? (
                        <div className="row m-0 p-0" id="row-images" key={produtos.url_name}>
                            <div className="col-sm-2 d-none d-md-block" id="img-left">
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
                            <div className="d-flex my-3 d-block d-md-none" id="img-left">
                                {produtos.foto_2 && (
                                    <a className="card w-50 p-1" href="#" onClick={() => handleImageClick(imgSrc2)}>
                                        <img className="img-left" src={produtos.foto_2} alt="Foto 2" />
                                    </a>
                                )}
                                {produtos.foto_3 && (
                                    <a className="card w-50 p-1" href="#" onClick={() => handleImageClick(imgSrc3)}>
                                        <img className="img-left" src={produtos.foto_3} alt="Foto 3" />
                                    </a>
                                )}
                                {produtos.foto_4 && (
                                    <a className="card w-50 p-1" href="#" onClick={() => handleImageClick(imgSrc4)}>
                                        <img className="img-left" src={produtos.foto_4} alt="Foto 4" />
                                    </a>
                                )}
                            </div>
                            <div className="col">
                                <img 
                                    src={imgPrincipal || produtos.foto_1} 
                                    id="img-prod" 
                                    alt="Foto Principal" 
                                    className="main-img" 
                                />
                            </div>
                            <div className="col" id="part2">
                                <p id="tituloInd">{produtos.name}</p>
                                <p className="preco-anterior" id="preco-anterior">
                                    R${(produtos.price * 1.35).toFixed(2).replace('.', ',')}
                                </p>
                                <p className="preco" id="preco-pdts">
                                    R${produtos.price.toFixed(2).replace('.', ',')}
                                </p>
                                <p className="descricao" id="descricao-pdts">{produtos.description}</p>
                                <div className="row">
                                    <button onClick={() => handleAdd (produtos.product_id)} className="btn" id="add-cart-pdt">
                                        Adicionar ao carrinho
                                    </button>
                                    <button className="btn" id="add-cart-pdt">
                                        Comprar Agora
                                    </button>
                                </div>
                            </div>
                            <div className="mt-5 d-flex justify-content-center">
                                <div className="row d-flex justify-content-evenly" id="border-top-line">    
                                        <div className="col-4">
                                            <img src={`/images/${ico_entregas}`} id="ico" /> Entregas em 24h 
                                        </div>
                                        <div className="col-4">
                                            <img src={`/images/${ico_cartao}`} id="ico" /> Parcelamos em até 10x sem juros 
                                        </div>
                                        <div className="col-4">
                                            <img src={`/images/${ico_cadeado}`} id="ico" /> Site 100% seguro 
                                        </div>
                                    </div>
                                </div>
                            </div>
                    ) : (
                        <p>Não há produtos disponíveis.</p>
                    )}
                </div>
            </div>

            <FooterDesktop />
        </>
    );
}
