import { useEffect, useState } from "react";
import { client } from "../../services/client";
import { Nav_bar } from "../../components/NavBar/Navbar";
import '../../styles/ProdutoIndividual/ProdutoIndividual.css';
import { useParams } from "react-router-dom";
import { pegarProdutoIndividual } from "./pegarProdutos";
import { Produto } from "../../types/Produto";
import { Footer } from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useMediaQuery, useTimeout } from "@chakra-ui/react";
import { Loading } from "../Loading";
import { NotFound } from "../404";
import { Button, Spinner } from "react-bootstrap";

const ico_entregas = 'entregas.png';
const ico_cartao = 'ico-cartao.jpg';
const ico_cadeado = 'ico-cadeado.png';

interface CartItem {
    produto: {
        product_id: number;
    };
    quantity: number;
}


export function ProdutoIndividual() {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<boolean>(false);
    const { url_name } = useParams<{ url_name: string }>();
    const url_product = url_name?.toString();
    const [produtos, setProdutos] = useState<Produto>();
    const [imgPrincipal, setImgPrincipal] = useState<string>("");
    const imgSrc2 = produtos?.foto_2 || '';
    const imgSrc3 = produtos?.foto_3 || '';
    const imgSrc4 = produtos?.foto_4 || '';
    const [emailUser, setEmail] = useState<string>('');
    const [carrinho, setCarrinho] = useState<{ [key: number]: number }>({});
    const [isLargerThanMD] = useMediaQuery("(min-width: 800px)");
    const [error, setError] = useState<boolean>(false);
    const [isLoadingAddCart, setIsLoadingAddCart] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    var compra = 0;

    const loadProdutos = async () => {
        const data = await pegarProdutoIndividual(`/produtos/itens/${url_product}/`);
        let name: any;
        if (!data) {
            return setError(true);
        }
        setProdutos(data);
        name = data.name.toString();
        setImgPrincipal(data.foto_1); // Inicializa com a foto principal
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
        setIsLoadingAddCart(true);
        if (!currentUser) {
            navigate("/login");
            return;
        }

        // Verifica a quantidade atual no carrinho
        setTimeout(() => {
            const currentQuantity = carrinho[product_id] || 0;
            const newQuantity = currentQuantity + 1;
            setCarrinho(prev => ({ ...prev, [product_id]: newQuantity }));

            try {
                if (currentQuantity > 0) {
                    // Se o item já existe, faz um PATCH para atualizar a quantidade
                    client.patch('accounts/cart/', {
                        email: emailUser,
                        product_id: product_id,
                        quantity: newQuantity,
                    });
                    toast(`Quantidade do item aumentada! Agora você tem ${newQuantity}.`, {
                        autoClose: 2000,
                    });
                } else {
                    // Se o item não existe, faz um POST para adicioná-lo
                    client.post('accounts/add-item/', { email: emailUser, product_id: product_id });
                    toast("Você adicionou o item ao seu carrinho!", {
                        autoClose: 2000,
                    });
                }
            } catch (error) {
                toast.error("Erro ao atualizar item no carrinho");
            }
        setIsLoadingAddCart(false)
        }, 1000);
    };


    useEffect(() => {
        if (emailUser) {
            const fetchCartItems = async () => {
                try {
                    const response = await client.post('/accounts/cart/', { email: emailUser });
                    const cartItems: CartItem[] = response.data.itens; // Definindo o tipo aqui

                    const newCarrinho: { [key: number]: number } = {};
                    cartItems.forEach((item: CartItem) => { // Usando o tipo definido
                        newCarrinho[item.produto.product_id] = item.quantity;
                    });
                    setCarrinho(newCarrinho);
                } catch (error) {
                    window.location.reload();
                }
            };

            fetchCartItems();
        }
    }, [emailUser]);

    if (error) {
        return <NotFound />;
    }

    function irParaPagamentoBtn() {
        setIsLoading(true);
        if (!currentUser) {
            return navigate("/login");
        }

        client.post('/compra/compra-create/',
            {
                email: emailUser,
                products: [produtos?.product_id],
                quantity: [1],
                valor_total: produtos?.price
            })
            .then(response => {
                compra = response.data.compra_id;
                navigate(`/resumo-compra/${compra}`);
                window.location.reload();
            }, error => {
                toast.error("Erro ao realizar a compra");
            });
        setIsLoading(false);
    }

    return (
        <>
            <ToastContainer
                draggable
            />
            <Nav_bar />
            <div className="container-fluid mt-5 p-0 border-0">
                <div className="flex-wrap d-flex m-0 p-0" id="produtoInd">
                    {produtos || error ? (
                        <div className={`row me-2 ${isLargerThanMD ? 'col' : 'row ms-2 p-0'}`} id="row-images" key={produtos.url_name}>
                            <div className="col-sm-2 d-none d-md-block ms-2" id="img-left">
                                {produtos.foto_2 && (
                                    <a className="card w-50 mb-2" href="#" onClick={() => handleImageClick(imgSrc2)}>
                                        <img className="img-left" src={produtos.foto_2} alt="Foto 2" />
                                    </a>
                                )}
                                {produtos.foto_3 && (
                                    <a className="card w-50 mb-2" href="#" onClick={() => handleImageClick(imgSrc3)}>
                                        <img className="img-left" src={produtos.foto_3} alt="Foto 3" />
                                    </a>
                                )}
                                {produtos.foto_4 && (
                                    <a className="card w-50 mb-2" href="#" onClick={() => handleImageClick(imgSrc4)}>
                                        <img className="img-left" src={produtos.foto_4} alt="Foto 4" />
                                    </a>
                                )}
                            </div>
                            <div className="d-flex my-3 d-block d-md-none" id="img-left">
                                {produtos.foto_2 && (
                                    <a className="card w-50 p-1 me-2" href="#" onClick={() => handleImageClick(imgSrc2)}>
                                        <img className="img-left" src={produtos.foto_2} alt="Foto 2" />
                                    </a>
                                )}
                                {produtos.foto_3 && (
                                    <a className="card w-50 p-1 me-2" href="#" onClick={() => handleImageClick(imgSrc3)}>
                                        <img className="img-left" src={produtos.foto_3} alt="Foto 3" />
                                    </a>
                                )}
                                {produtos.foto_4 && (
                                    <a className="card w-50 p-1 me-2" href="#" onClick={() => handleImageClick(imgSrc4)}>
                                        <img className="img-left" src={produtos.foto_4} alt="Foto 4" />
                                    </a>
                                )}
                            </div>
                            <div className={`d-flex ${isLargerThanMD ? 'col' : 'row m-0 p-0'}`}>
                                <img
                                    src={imgPrincipal || produtos.foto_1}
                                    id="img-prod"
                                    alt="Foto Principal"
                                    className="main-img"
                                />
                            </div>
                            <div className="col m-0 p-0" id="part2">
                                <p id="tituloInd">{produtos.name}</p>
                                <p className="preco-anterior" id="preco-anterior">
                                    R${(produtos.price * 1.35).toFixed(2).replace('.', ',')}
                                </p>
                                <p className="preco" id="preco-pdts">
                                    R${produtos.price.toFixed(2).replace('.', ',')}
                                </p>
                                <p className="descricao" id="descricao-pdts">{produtos.description}</p>
                                <div className="row m-0 p-0">
                                    <Button
                                        onClick={() => handleAdd(produtos.product_id)}
                                        className="btn border-0"
                                        disabled={isLoadingAddCart}
                                        id="add-cart-pdt">
                                        {isLoadingAddCart ? (<Spinner animation="border" />) : ("Adicionar ao carrinho")}
                                    </Button>
                                    <Button
                                        className="btn border-0"
                                        onClick={() => irParaPagamentoBtn()}
                                        id="compra-pdt"
                                        disabled={isLoading}>
                                        {isLoading ? (<Spinner animation="border" />) : ("Comprar Agora")}
                                    </Button>
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
                        <Loading height="550px" withPhrase={true} />
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}
