import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/global.ts';
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react';
import { Loading } from './components/Loading.tsx';

const App = React.lazy(() => import("./App.tsx"));

createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<Loading />}>
    <StrictMode>
      <ChakraProvider>
        <GlobalStyle />
        <App />
      </ChakraProvider>

    </StrictMode>
  </Suspense>
)
