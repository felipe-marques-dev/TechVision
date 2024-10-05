import { useEffect, useState } from "react";
import { client } from "../services/client";
import { ImageLoader } from "./ImageLoader";
import { A } from "../styles/NavBar/navbar";

interface Produto {
  product_id: number;
  name: string;
  foto_1: string;
  url_name: string; // Certifique-se de que esse campo existe em seu API
}

interface SearchBarProps {
  width: string;
}

export const SearchBar = (props: SearchBarProps) => {
  const [termoBusca, setTermoBusca] = useState<string>('');
  const [sugestoes, setSugestoes] = useState<Produto[]>([]);

  useEffect(() => {
    if (termoBusca.length > 2) {
      client.get(`/produtos/sugestoes/?q=${termoBusca}`)
        .then(response => setSugestoes(response.data))
        .catch(error => console.error(error));
    } else {
      setSugestoes([]);
    }
  }, [termoBusca]);

  return (
    <div className="container position-relative d-flex flex-column align-items-center" style={{ padding: '0' }}>
      {/* Barra de pesquisa */}
      <div className={`d-flex col-5 bg-white w-${props.width}  border border-white rounded-pill justify-content-center`} role="search">
        <input
          className="form-control border border-white rounded-pill"
          type="search"
          placeholder="Pesquisar produtos..."
          aria-label="Search"
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
        />
      </div>

      {/* Resultados da pesquisa */}
      {sugestoes.length > 0 && (
        <div
          className={`search-results position-fixed w-${props.width} p-2 rounded border border-secondary`}
          style={{ zIndex: 1000, marginTop: '5vh', backgroundColor: 'black' }}
        >
          <ul className="list-unstyled mb-0" style={{ padding: 0, margin: 0 }}>
            {sugestoes.map((produto) => (
              <a href={`/produto/${produto.url_name}`}>
                <li
                  key={produto.product_id}
                  className="d-flex align-items-center p-2 border-bottom"
                  style={{ width: '100%' }}
                >
                  <ImageLoader
                    onClick={produto.url_name}
                    src={`http://localhost:8000/media/${produto.foto_1}`}
                    erro={false}
                    style={{ width: '60px', height: '60px', marginRight: '10px' }} // Ajuste o tamanho da imagem e o espaçamento
                  />
                  <div className="fs-5" style={{ flex: 1 }}>
                    {produto.name}
                  </div>
                </li>
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
