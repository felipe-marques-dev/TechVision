import { useEffect, useState } from "react";
import { Nav_bar } from "../../components/NavBar/Navbar";
import { client } from "../../services/client";
import { useNavigate } from "react-router-dom";
import '../../styles/Carrinho/carrinho.css'
import { H3 } from  "../../styles/Carrossel/lista";

interface Produto {
  name: string;
  product_id: number;
  price: number;
  description: string;
  url_name: string;
  foto_1: string;
}

export function Carrinho() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<boolean>(false);
  const [produtos, setProdutos] = useState<Produto[]>([]);

  // Verificar sessão do usuário
  useEffect(() => {
    document.title = 'Carrinho';
    client.get("/accounts/usuario")
      .then(response => {
        setCurrentUser(true);
        // Carregar produtos quando o usuário estiver autenticado
        client.get('/produtos/itens')
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
    <div>
      <Nav_bar />
      {currentUser && (
    

          <div className="container-fluid">
             <div className="col d-flex justify-content-center fs-1 " >
                        <H3 id="text-titulo" style={{padding:0}}>Carrinho</H3>
                </div>

            <div className="row">
              <div className="col-8">
                {produtos.length > 0 ? (
                  produtos.map(produto => (
                    <div className="cart-item row align-items-center" key={produto.product_id}>
                      <div className="col-md-3">
                        <img src={produto.foto_1} alt={produto.name} />
                      </div>
                      <div className="col">
                        <p className="nome-carrinho">{produto.name}</p>
                        <p>{produto.description}</p>
                      </div>
                     
                      <div className="col text-center">
                        <div className="row" style={{width:200}}>
                        <p>R$ {produto.price}</p>
                        <button className="btn btn-danger btn-sm">Remover</button>
                      </div>
                    </div>
                    </div>
                  ))
                ) : (
                  <p>Não há produtos no carrinho.</p>
                )}
              </div>

              <div className="col d-flex" style={{padding:80}}>
                <div className="summary">
                  <h5>RESUMO</h5>
                  <p><strong>Valor dos Produtos:</strong> R$ 4.899,80</p>
                  <p><strong>Frete:</strong> R$ 0,00</p>
                  <h5>ENTREGA</h5>
                  <p><strong>CEP *</strong> 12345-678</p>
                  <p><a href="#">Não lembro meu CEP</a></p>
                  <a href="pagamento.html">
                    <button className="botao">Ir para o pagamento</button>
                  </a>
                  <button className="btn btn-secondary btn-custom">Continuar comprando</button>
                </div>
              </div>
            </div>
          </div>
      )}
    </div>
  );
}
