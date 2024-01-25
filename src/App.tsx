import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/authorized/Home.tsx";
import Register from "./screens/unauthorized/Register.tsx";
import Login from "./screens/unauthorized/Login.tsx";
import Movies from "./screens/authorized/Movies.tsx";
import TvSeries from "./screens/authorized/TvSeries.tsx";
import Bookmarks from "./screens/authorized/Bookmarks.tsx";
import { Box, Flex } from "@chakra-ui/react";
import Colors from "./Colors.json";
import Container from "./layouts/Container.tsx";
import Navbar from "./layouts/Navbar.tsx";
import Input from "./components/Search/index.tsx";
import Profile from "./screens/authorized/Profile.tsx";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setAuthenticated(true);
      } else {
        // User is signed out
        setAuthenticated(false);
      }
    });
    return subscribe;
  }, []);

  return (
    <Flex
      bg={Colors["Dark-Blue"]}
      color={Colors["Pure-White"]}
      // flex={1}
      flexDir={["column", "column", "row"]}
      overflow={"hidden"}
    >
      <Box
        paddingBlock={["0rem", "1.5rem", "2rem"]}
        paddingInline={["0rem", "1.5rem", "2rem"]}
      >
        <Navbar />
      </Box>
      <Container>
        <Box display={authenticated ? "block" : "none"}>
          <Input
            placeholder={"Search for Movies or Tv Series"}
            icon
            name={"movies"}
          />
        </Box>

        <Router>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" Component={Home} />
            <Route path="/movies" Component={Movies} />
            <Route path="/tv_series" Component={TvSeries} />
            <Route path="/bookmarks" Component={Bookmarks} />
            <Route path="/profile" Component={Profile} />
          </Routes>
        </Router>
      </Container>
    </Flex>
  );
}

export default App;
