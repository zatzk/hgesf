import { ChakraProvider } from '@chakra-ui/react'
import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { Router } from './routes/Router'

import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
