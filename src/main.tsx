import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/font/Outfit-Light.ttf";
import "./assets/font/Outfit-Medium.ttf";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Colors from "./Colors.json";
import "./index.css";
import App from "./App.tsx";

const queryClient = new QueryClient();
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: Colors["Dark-Blue"],
        color: Colors["Pure-White"],
      },
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
