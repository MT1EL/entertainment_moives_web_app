import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/font/Outfit-Light.ttf";
import "./assets/font/Outfit-Medium.ttf";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
