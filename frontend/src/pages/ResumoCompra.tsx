import { Nav_bar } from "../components/NavBar/Navbar"
import { BsCheckCircle } from "react-icons/bs";
import { Footer } from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import { client } from "../services/client";
import { useNavigate, useParams } from "react-router-dom";
import { AxiosResponse } from "axios";
import { Produto } from "../types/Produto";

export function ResumoCompra() {
  const navigate = useNavigate();
  const [compraInfo, setCompraInfo] = useState([])
  const [compraPrice, setCompraPrice] = useState(0)
  const [currentUser, setCurrentUser] = useState<boolean>(false);
  const [emailUser, setEmail] = useState<string>('');
  const { compra_id } = useParams<{ compra_id: string }>();
  const [ produtosComprados, setProdutosComprados ] = useState<[Produto[]]>([]);

  const loadCompra = async () => {
    if (emailUser) {
      const response: AxiosResponse = await client.post('/compra/compra-itens', { email: emailUser, pedido_id: compra_id })
      setCompraInfo(response.data.pedidos)
      setCompraPrice(response.data.valor_total)
      console.log(compraInfo)
      console.log(response.data.pedidos)
    }
  }

  useEffect(() => {
    client.get("/accounts/usuario")
      .then(response => {
        setCurrentUser(true);
        setEmail(response.data.user.email);
        loadCompra()
      })
      .catch(error => {
        setCurrentUser(false);
        navigate('/login');
      });
  }, [currentUser]);

  const createProductList = () => {
    compraInfo.forEach((produto) => {
      setProdutosComprados(produto)
    });
  }

  return (
    <>

      <Nav_bar />
      <div className="d-flex flex-column justify-content-center align-items-center p-4" style={{ minHeight: "100vh", textAlign: 'justify' }}>
        <BsCheckCircle size={70} color="green" className="mx-auto" />
        <h1>Parabéns!</h1>
        <p className="w-75  fs-5 text-wrap">Olá, {emailUser}!<br></br>
          <br></br>
          Gostaríamos de começar dizendo um muito obrigado por escolher a nossa loja para a sua compra! Estamos muito felizes por você ter confiado em nós, e queremos que saiba que ficamos emocionados em tê-lo como cliente.
          <br></br>
          <br></br>
          Seu pedido foi processado com sucesso e já estamos trabalhando para garantir que tudo chegue até você de forma rápida e segura. Aqui está um resumo do seu pedido:
          <br></br>
          <br></br>
          <h5>Número do pedido: {compra_id}</h5>
          <br></br>
          <h5>Valor total: R${compraPrice.toFixed(2)}</h5><br></br>

          Produtos comprados:
          {compraInfo.map((item) =>
            <h5>{item.quantity}x {item.produto.name}</h5>
          )}
          <br></br><br></br>
          Em breve, você receberá um e-mail de confirmação com todos os detalhes e o código de rastreamento para acompanhar o status da entrega.
          <br></br><br></br>
          O que esperar a seguir:
          <br></br><br></br>
          Processamento e envio: Estamos preparando seu pedido com muito carinho. A equipe está cuidando de cada detalhe para que sua experiência seja a melhor possível.<br></br><br></br>
          Envio e rastreamento: Assim que o seu pedido for enviado, enviaremos o número de rastreamento para que você possa acompanhar a entrega em tempo real.<br></br><br></br>
          Atendimento ao cliente: Caso tenha qualquer dúvida ou precise de ajuda, nossa equipe de atendimento está à disposição.<br></br>
          <br></br><br></br>
          A nossa missão é garantir que sua experiência de compra seja perfeita do início ao fim. Estamos sempre buscando melhorar e oferecer o melhor para nossos clientes. E, por isso, se você tiver algum feedback ou sugestão, não hesite em nos enviar. Sua opinião é fundamental para nós!<br></br>
          <br></br>
          Além disso, fique de olho em nossos cupons e promoções exclusivas, que enviamos periodicamente. Assim, você sempre estará por dentro das novidades e das melhores ofertas.
          <br></br>
          Novamente, muito obrigado por escolher a Atena. Estamos muito felizes em fazer parte da sua jornada de compra e esperamos que você tenha uma experiência incrível com nossos produtos.

          Aproveite sua compra, e esperamos vê-lo novamente em breve!</p>
        <p className="w-75 text-center fs-2 text-wrap">Atena agradece!</p>
      </div>
      <Footer />
    </>
  )
}

