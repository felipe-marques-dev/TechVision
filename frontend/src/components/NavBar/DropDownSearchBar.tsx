import React, { useEffect } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { CaretDownIcon } from '@radix-ui/react-icons';
import '../../styles/NavBar/dropdown_search_styles.css';
import { client } from '../../services/client';

const DropdownMenuDemo: React.FC = () => {
  const [termoBusca, setTermoBusca] = useState('');
  const [open, setOpen] = useState(false);
  const [sugestoes, setSugestoes] = useState([]);

  // Busca por sugestões quando o termo tem mais de 2 caracteres
  useEffect(() => {
    if (termoBusca.length > 2) {
      client
        .get(`/produtos/sugestoes/?q=${termoBusca}`)
        .then((response) => setSugestoes(response.data))
        .catch((error) => console.error(error));
    } else {
      setSugestoes([]);
    }
  }, [termoBusca]);

  // Abrir o dropdown automaticamente quando o usuário digita
  useEffect(() => {
    if (termoBusca.length > 0) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [termoBusca]);

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <input
          type="text"
          placeholder="Pesquisar produtos..."
          aria-label="Search"
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
          onFocus={() => setOpen(true)} // Abrir ao focar no input
          style={{
            width: '60vw',
            color: 'black',
            height: '5vh',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />
      </DropdownMenu.Trigger>

      {/* Dropdown para sugestões */}
      {sugestoes.length > 0 && (
        <DropdownMenu.Content
          className="DropdownMenuContent"
          sideOffset={5}
          style={{
            zIndex: 1,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '5px',
            maxHeight: '200px',
            overflowY: 'auto',
            width: '60vw',
            padding: '10px',
          }}
        >
          {sugestoes.map((produto) => (
            <DropdownMenu.Item
              key={produto.product_id}
              className="DropdownMenuItem"
              style={{
                fontSize: '16px',
                padding: '10px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee',
              }}
              onClick={() => {
                setTermoBusca(produto.name); // Preencher o input com o nome do produto
                setOpen(false); // Fechar o dropdown após seleção
              }}
            >
              {produto.name}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      )}
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;
