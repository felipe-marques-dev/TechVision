import { useEffect, useState } from "react";
import { client } from "../../services/client";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/SearchBar.css"

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
  const navigate = useNavigate();
  const [termoBusca, setTermoBusca] = useState<string>('');
  const [sugestoes, setSugestoes] = useState<Produto[]>([]);
  const [using, setUsing] = useState(true)


  const handleSubmit = () => {
    if (termoBusca.trim() === ""){
      return null;
    }
    else{
      setUsing(false)
      return navigate(`/pesquisa?q=${termoBusca}`);
    }
  }

  const handleEnterPress = (event: { key: string; }) => {
    if (event.key === 'Enter' && termoBusca.trim() !== "")
      handleSubmit();
  }

  useEffect(() => {
    setUsing(true);
    if (termoBusca.length > 0) {
      client.get(`/produtos/sugestoes/?q=${termoBusca}`)
        .then(response => setSugestoes(response.data))
        .catch(error => console.error(error));
    } else {
      setSugestoes([]);
    }
  }, [termoBusca]);

  return (
    <div className="container position-relative m-0 d-flex flex-column align-items-center p-0">
      {/* Barra de pesquisa */}
      <InputGroup className={`d-flex col-5 bg-black w-${props.width} border-0 justify-content-center`} role="search" id="inputGroup" >
        <Form.Control
          className="form-control border-0"
          type="search"
          placeholder="Pesquisar produtos..."
          aria-label="Search"
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
          onKeyDown={handleEnterPress}
          id="formControl"
        />
        {/* Resultados da pesquisa */}
        {sugestoes.length > 0 && using && (
          <div
            className={`search-results position-fixed p-2 rounded border border-secondary me-5`}
            id="suggestions"
          >
            <ul className="list-unstyled mb-0">
              {sugestoes.map((produto) => (
                <a  href={`/produto/${produto.url_name}`}>
                  <li
                    id="itemSuggestions"
                    key={produto.product_id}
                    className="d-flex align-items-center p-2"
                  >
                    {produto.name}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        )}
        <Button
          className="m-0 border-0 text-center"
          id="buttonSearch"
          variant="dark"
          onClick={handleSubmit}
        >
          <div className="d-flex justify-content-center text-center">
            <FaMagnifyingGlass color="white" />
          </div>
        </Button>

      </InputGroup>

    </div>

  )
};