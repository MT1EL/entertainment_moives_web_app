import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/font/Outfit-Light.ttf";
import "./assets/font/Outfit-Medium.ttf";
import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/authorized/Home.tsx";
import Register from "./screens/unauthorized/Register.tsx";
import Colors from "./Colors.json";
import Login from "./screens/unauthorized/Login.tsx";
import Container from "./layouts/Container.tsx";
const authenticated = false;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Flex bg={Colors["Dark-Blue"]} color={Colors["Pure-White"]}>
        <Container>
          <Router>
            {authenticated ? (
              <Routes>
                <Route path="/" Component={Home} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/" Component={Register} />
                <Route path="/login" Component={Login} />
              </Routes>
            )}
          </Router>
        </Container>
      </Flex>
    </ChakraProvider>
  </React.StrictMode>
);
