import React, { useEffect } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import {
  HamburgerMenuIcon,
  CaretDownIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';
import '../../styles/NavBar/dropdown_styles.css'
import { client } from '../../services/client';

const DropdownMenuDemo: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    client.get('produtos/categories/')
    .then(response => {
      setCategorias(response.data)
    })
  }, [])
  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild >
        <button className="d-inline-flex align-items-center" aria-label="Customise options"         
        onMouseEnter={() => setOpen(true)}  
        onMouseLeave={() => setOpen(false)}
        style={{
            fontSize: '28px',
            border: '0px',
            zIndex: "2"
        }}
        >
          Categorias
          <CaretDownIcon/>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" 
         onMouseEnter={() => setOpen(true)}
         onMouseLeave={() => setOpen(false)}
         sideOffset={5}
         >
          {categorias.map(categoria =>(
            <DropdownMenu.Item 
            key={categoria.category} 
            className="DropdownMenuItem"
            style={{
              fontSize: '22px',
              padding: '20px'
            }}
            >
            {categoria.category}
          </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;
