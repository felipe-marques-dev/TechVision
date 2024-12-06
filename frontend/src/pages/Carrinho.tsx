import { useEffect, useState } from "react";
import { Nav_bar } from "../components/NavBar/Navbar";
import { client } from "../services/client";
import { useNavigate } from "react-router-dom";
import '../styles/Carrinho/carrinho.css';
import { H3 } from "../styles/Carrossel/lista";
import 'react-toastify/dist/ReactToastify.css';
import { ImageLoader } from "../components/ImageLoader";
import { ToastContainer, toast } from 'react-toastify';
import { Item } from "../types/Produto";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stack,
} from '@chakra-ui/react';
import { Footer } from "../components/Footer/Footer";
import { Loading } from "../components/Loading";
import { Spinner } from "react-bootstrap";

export function Carrinho() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<boolean>(false);
  const [produtos, setProdutos] = useState<Item[]>([]);
  const [emailUser, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    document.title = 'Carrinho';
    client.get("/accounts/usuario")
      .then(response => {
        setCurrentUser(true);
        setEmail(response.data.user.email);
      })
      .catch(error => {
        setCurrentUser(false);
        navigate('/login');
      });
  }, [currentUser]);

  useEffect(() => {
    setIsLoading(true);
    if (emailUser) {
      client.post('/accounts/cart/', { email: emailUser })
        .then(response => {
          setProdutos(response.data.itens);
        })
        .catch(error => {
          toast.error("Erro ao buscar produtos");
        });
    }
    setIsLoading(false);
  }, [emailUser]);

  const handleDelete = async (product_id: number) => {
    if (emailUser) {
      const url = `/accounts/cart/${product_id}`;
      try {
        await client.delete(url, {
          headers: {
            email: emailUser,
          },
          data: {
            email: emailUser,
            product_id: product_id,
          }
        });
        toast.success("Você retirou o item do seu carrinho!");
        setProdutos(produtos.filter(item => item.produto.product_id !== product_id));
      } catch (error) {
        toast.error("Erro ao retirar item do carrinho");
      }
    }
  };

  const handleQuantityChange = async (product_id: number, quantity: number) => {

    if (emailUser) {
      const url = `/accounts/cart/`;
      try {
        await client.patch(url, {
          email: emailUser,
          product_id,
          quantity,
        });

        setProdutos(prevProdutos =>
          prevProdutos.map(item =>
            item.produto.product_id === product_id
              ? { ...item, quantity }
              : item
          )
        );
      } catch (error) {
        toast.error("Erro ao mudar quantidade");
      }
    }
  };

  const calcularTotal = () => {
    return produtos.reduce((total, item) => {
      return total + (item.produto.price * item.quantity);
    }, 0).toFixed(2);
  };

  function continuarComprandoBtn() {
    navigate('/');
  }

  function irParaPagamentoBtn() {
    client.post('/accounts/cart/', { email: emailUser })
      .then(response => {
        setProdutos(response.data.itens);
      })
      .catch(error => {
        toast.error("Erro ao buscar produtos");
      });

    const productArray: number[] = [];
    const quantityArray: number[] = [];
    produtos.forEach((item) => {
      productArray.push(item.produto.product_id)
      quantityArray.push(item.quantity)
    });


    let compra = 0;
    client.post('/compra/compra-create/',
      {
        email: emailUser,
        products: productArray,
        quantity: quantityArray,
        valor_total: calcularTotal()
      })
      .then(response => {
        compra = response.data.compra_id;
        navigate(`/resumo-compra/${compra}`);
        window.location.reload();
      })
      .catch(error => {
        toast.error("Erro ao efetuar compra");
      });
  }


  return (
    <div>
      <Nav_bar />
      <ToastContainer draggable />
      {currentUser && (
        <div className="container-fluid row d-flex justify-content-center m-0 p-0" >
          <div className="col d-flex justify-content-center">
            <H3 id="text-titulo" style={{ padding: 0 }}>Carrinho</H3>
          </div>

          <div className="row d-flex justify-content-center m-0">
            {!isLoading || produtos.length > 0 ? 
           (<div className="col-md-12 col-lg-8" style={{minHeight: "40vh"}}>
              {produtos.length > 0 ? (
                produtos.map(item => (
                  <div className="cart-item row align-items-center" id="box" key={item.produto.product_id}>
                    <div className="col-md-4 col-lg-3 d-flex justify-content-center">
                      <ImageLoader src={`http://localhost:8000${item.produto.foto_1}`} onClick={item.produto.url_name} erro={false} className="imgLoader" />
                    </div>
                    <div className="col-sm-10 col-md-6">
                      <p className="nome-carrinho text-md-center text-lg-start">{item.produto.name}</p>
                      <p className="text-md-center text-lg-start">{item.produto.description}</p>
                      <p>Quantidade:
                        <div>
                          <Stack shouldWrapChildren direction='row'>
                            <NumberInput
                              size='xs'
                              maxW={90}
                              value={item.quantity}
                              min={1}
                              onChange={(valueString) => {
                                const value = parseInt(valueString);
                                if (!isNaN(value)) {
                                  handleQuantityChange(item.produto.product_id, value);
                                }
                              }}
                            >
                              <NumberInputField />
                              <NumberInputStepper>
                                <NumberIncrementStepper
                                  onClick={() => handleQuantityChange(item.produto.product_id, item.quantity)}
                                />
                                <NumberDecrementStepper
                                  onClick={() => handleQuantityChange(item.produto.product_id, item.quantity)}
                                />
                              </NumberInputStepper>
                            </NumberInput>
                          </Stack>
                        </div>
                      </p>
                    </div>

                    <div className="col text-center d-flex justify-content-center">
                      <div className="row d-flex" style={{ width: 200 }}>
                        <p className="fs-4 fw-semibold">R$ {item.produto.price.toFixed(2)}</p>
                        <p className="btn btn-danger btn-sm" style={{ width: 200 }} onClick={() => handleDelete(item.produto.product_id)}>Remover</p>
                      </  div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Não há produtos no carrinho.</p>
              )}
            </div>):(<div className="col-md-12 col-lg-8 mt-5 d-flex justify-content-center align-items-center"><Spinner animation="border"/></div>)
}
            <div className="col-md-8 col-lg-4 d-flex justify-content-md-center pt-4">
              <div className="row w-md-75 col-md-8" style={{ height: '200px' }}>
                <h5>RESUMO</h5>
                <p><strong>Valor dos Produtos:</strong> R$ {calcularTotal()}</p>
                <div className="justify-content-center">
                  <p className="botao" onClick={irParaPagamentoBtn}>Ir para o pagamento</p>
                  <p className="botao-carrinho" onClick={continuarComprandoBtn}>Continuar comprando</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
