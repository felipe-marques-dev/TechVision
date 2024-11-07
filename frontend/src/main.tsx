import { createRoot } from 'react-dom/client';
import { Loading } from './components/Loading.tsx';
import React from 'react';
import { StrictMode, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react'
import "react-toastify/dist/ReactToastify.css";

const App = React.lazy(() => import("./App.tsx"));
const GlobalStyle = React.lazy(() => import('./styles/global.ts'));

createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<Loading height="100vh" withPhrase={true}/>}>
    <StrictMode>
      <ChakraProvider>
        <GlobalStyle />
        <App />
      </ChakraProvider>

    </StrictMode>
  </Suspense>
)
