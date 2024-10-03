import { useEffect, useState } from "react";
import { Nav_bar } from "../../components/NavBar/Navbar";
import { client } from "../../services/client";
import { useNavigate } from "react-router-dom";
import '../../styles/Carrinho/carrinho.css';
import { H3 } from "../../styles/Carrossel/lista";
import Calculo from "./Calculo";
import { ImageLoader } from "../../components/ImageLoader";
import { ToastContainer, toast } from 'react-toastify';

interface Produto {
  name: string;
  product_id: number;
  price: number;
  description: string;
  url_name: string;
  foto_1: string;
}

interface Item {
  produto: Produto;
  quantity: number;
}

export function Carrinho() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<boolean>(false);
  const [produtos, setProdutos] = useState<Item[]>([]);
  const [emailUser, setEmail] = useState<string>('');
  const [deleted, setDeleted] = useState<boolean>(false)


  // Verificar sessão do usuário
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
  }, [navigate]);

  useEffect(() => {
    if (emailUser) {
      client.post('/accounts/cart/', { email: emailUser})
        .then(response => {
          setProdutos(response.data.itens); 
          response.data.itens.forEach(() => {
          });
        })
        .catch(error => {
          console.log("Erro ao buscar produtos", error);
        });
    }
  }, [emailUser, deleted]);

  const handleDelete = async (product_id:number) => { 
    if (emailUser) {
        const url = `/accounts/cart/${product_id}`;
        try {
          client.delete(url, {
            headers: {
              email: emailUser,
          },
          data: {
              email : emailUser,
              product_id: product_id,  // Inclua outros dados que você precisar
          }
        }
          );
          toast.warning("Você retirou o item do seu carrinho!");
          setDeleted(true)
        } catch (error) {
            console.error("Erro ao remover produto", error);
            toast.error("Erro ao retirar item do carrinho");
        }
    }
};



  return (
    <div>
      <Nav_bar />
      <ToastContainer />
      {currentUser && (
        <div className="container-fluid">
          <div className="col d-flex justify-content-center fs-1 ">
            <H3 id="text-titulo" style={{ padding: 0 }}>Carrinho</H3>
          </div>

          <div className="row">
            <div className="col-8">
              {produtos.length > 0 ? (
                produtos.map(item => (
                  <div className="cart-item row align-items-center" id="box" key={item.produto.product_id}>
                    <div className="col-md-3">
                    <ImageLoader src={`http://localhost:8000${item.produto.foto_1}`} onClick={item.produto.url_name} erro={false} className="imgLoader" />
                    </div>
                    <div className="col">
                      <p className="nome-carrinho">{item.produto.name}</p>
                      <p>{item.produto.description}</p>
                      <p>Quantidade: {item.quantity}</p>
                    </div>

                    <div className="col text-center">
                      <div className="row" style={{ width: 200 }}>
                        <p>R$ {item.produto.price}</p>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.produto.product_id)}>Remover</button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Não há produtos no carrinho.</p>
              )}
            </div>

            <div className="col d-flex" style={{ padding: 80 }}>
              <div className="summary">
                <h5>RESUMO</h5>
                <p><strong>Valor dos Produtos:</strong> R$ 4.899,80</p>
                <p><strong>Frete:</strong> R$ 0,00</p>
                <h5>ENTREGA</h5>
                <Calculo />

                <a href="pagamento.html">
                  <button className="botao">Ir para o pagamento</button>
                </a>
                <button className="botao-carrinho">Continuar comprando</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
