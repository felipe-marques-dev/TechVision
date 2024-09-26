import React, { useEffect } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import '../../styles/NavBar/dropdown_styles.css';
import { client } from '../../services/client';

const DropdownMenuDemo: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate(); // Inicializar useNavigate

  useEffect(() => {
    client.get('produtos/categories/')
      .then(response => {
        setCategorias(response.data);
      });
  }, []);

  const handleCategoryClick = (categoria: string) => {
    navigate(`/categoria/${categoria}`); // Redirecionar para a página da categoria
  };

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button className="d-inline-flex align-items-center p-0 m-0" aria-label="Customise options"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          style={{
            fontSize: '22px',
            border: '0px',
          }}
        >
          Categorias
          <CaretDownIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          sideOffset={5}
          style={{ zIndex: "1" }}
        >
          {categorias.map(categoria => (
            <DropdownMenu.Item
              key={categoria.name}
              className="DropdownMenuItem"
              style={{
                fontSize: '22px',
                padding: '0px',
              }}
              onClick={() => handleCategoryClick(categoria.url_name)} // Ação de clique
            >
              {categoria.name}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;
