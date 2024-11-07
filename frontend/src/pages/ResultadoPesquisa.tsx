import { Nav_bar } from "../components/NavBar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import { Produto } from "../types/Produto";
import { client } from "../services/client";
import { useSearchParams } from "react-router-dom";
import ProdutoCard from "../components/Produtos/ProdutoCard";
import { H3 } from "../styles/Carrossel/lista";

export default function ResultadoPesquisa() {
  const [sugestoes, setSugestoes] = useState<Produto[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const termoBusca = searchParams.get('q');

  useEffect(() => {
    if (termoBusca && termoBusca.length > 0) {
      client.get(`/produtos/sugestoes/?q=${termoBusca}`)
        .then(response => {
          setSugestoes(response.data)
        })
        .catch(error => console.error(error));
    } else {
      setSugestoes([]);
    }
  }, [termoBusca]);

  return (
    <>
      <Nav_bar />
      <div style={{ minHeight: "70vh" }}>

        <div className="container my-4">
          <H3 className="text-center mb-4 d-flex justify-content-center">Resultado da Pesquisa</H3>
          {sugestoes.length > 0 ? (
            <div className="row justify-content-md-start"> {/* g-4 para espaçamento consistente */}
              {sugestoes.map(produtos => (
                <div className="col-md-auto d-flex justify-content-center" key={produtos.url_name}> {/* Colunas responsivas */}
                  <ProdutoCard
                    url_name={produtos.url_name}
                    price={produtos.price}
                    foto_1={`http://localhost:8000/media/${produtos.foto_1}`}
                    description={produtos.description}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="d-flex justify-content-center align-items-center text-center" style={{height: '60vh'}}>
              <h4>Nenhum resultado encontrado para "{termoBusca}"</h4>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}