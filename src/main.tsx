import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/font/Outfit-Light.ttf";
import "./assets/font/Outfit-Medium.ttf";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";

const queryClient = new QueryClient();
import App from "./App.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
