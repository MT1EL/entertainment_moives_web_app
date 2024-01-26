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
import { Box, Flex, Spinner } from "@chakra-ui/react";
import Colors from "./Colors.json";
import Container from "./layouts/Container.tsx";
import Navbar from "./layouts/Navbar.tsx";
import Input from "./components/Search/index.tsx";
import Profile from "./screens/authorized/Profile.tsx";

function App() {
  const [user, setUser] = useState<boolean | any>("false");

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(user);
      }
    });
    return subscribe;
  }, []);
  return (
    <Flex
      bg={Colors["Dark-Blue"]}
      color={Colors["Pure-White"]}
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
        <Box display={user ? "block" : "none"}>
          <Input
            placeholder={"Search for Movies or Tv Series"}
            icon
            name={"movies"}
            type="text"
          />
        </Box>
        {user === "false" ? (
          <Spinner />
        ) : (
          <Router>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home id={user?.uid} />} />
              <Route path="/movies" element={<Movies id={user?.uid} />} />
              <Route path="/tv_series" element={<TvSeries id={user?.uid} />} />
              <Route
                path="/bookmarks"
                element={
                  user === undefined || user === null ? (
                    <h1>Please Log in</h1>
                  ) : (
                    <Bookmarks id={user?.uid} />
                  )
                }
              />
              <Route path="/profile" element={<Profile currentUser={user} />} />
            </Routes>
          </Router>
        )}
      </Container>
    </Flex>
  );
}

export default App;
