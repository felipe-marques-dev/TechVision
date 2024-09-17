import { useEffect, useState } from "react"
import { client } from "../services/client";
import { Button } from "../styles/NavBar/navbar"

export const SearchBar = () => {
    const [termoBusca, setTermoBusca] = useState('');
    const [sugestoes, setSugestoes] = useState([]);

    useEffect (() => {
        if (termoBusca.length > 2) {
            client.get(`/produtos/sugestoes/?q=${termoBusca}`)
                .then(response => setSugestoes(response.data))
                .catch(error => console.error(error));
        } else {
            setSugestoes([]);
        }
    }, [termoBusca]);

    return(
        <div className="d-flex col-5 ms-auto bg-white border border-white rounded-pill" role="search">
              <input 
              className="form-control border border-white rounded-pill"
              type="search" placeholder="Pesquisar produtos..."
              aria-label="Search"
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)} 
                />
              {sugestoes.length > 0 && (
                <ul>
                    {sugestoes.map((produto: { product_id: number; name: string }) => (
                        <li style={{color: 'black'}} key={produto.product_id}>{produto.name}</li>
                    ))}
                </ul>
            )}
            </div>
    );
}