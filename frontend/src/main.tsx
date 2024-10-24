import { createRoot } from 'react-dom/client';
import { Loading } from './components/Loading.tsx';
import React from 'react';
import { StrictMode, Suspense } from 'react';
import GlobalStyle from './styles/global.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react'

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
