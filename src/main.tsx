import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/font/Outfit-Light.ttf";
import "./assets/font/Outfit-Medium.ttf";
import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/authorized/Home.tsx";
import Register from "./screens/unauthorized/Register.tsx";
import Colors from "./Colors.json";
import Login from "./screens/unauthorized/Login.tsx";
import Container from "./layouts/Container.tsx";
import Navbar from "./layouts/Navbar.tsx";
import Movies from "./screens/authorized/Movies.tsx";
import TvSeries from "./screens/authorized/TvSeries.tsx";
import Bookmarks from "./screens/authorized/Bookmarks.tsx";
import Input from "./components/Search/index.tsx";
const authenticated = true;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Flex
        bg={Colors["Dark-Blue"]}
        color={Colors["Pure-White"]}
        flex={1}
        flexDir={["column", "column", "row"]}
      >
        <Box
          paddingBlock={["0rem", "1.5rem", "2rem"]}
          paddingInline={["0rem", "1.5rem", "2rem"]}
        >
          <Navbar />
        </Box>
        <Container>
          <Input placeholder={"Search for Movies or Tv Series"} icon />
          <Router>
            {authenticated ? (
              <Routes>
                <Route path="/" Component={Home} />
                <Route path="/movies" Component={Movies} />
                <Route path="/tv_series" Component={TvSeries} />
                <Route path="/bookmarks" Component={Bookmarks} />
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
