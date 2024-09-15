import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/global.ts';
import { ChakraProvider } from '@chakra-ui/react'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
    <GlobalStyle/>
    <App />
    </ChakraProvider>
    
  </StrictMode>
)
