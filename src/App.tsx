import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import firebase from "firebase/compat/app";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
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
import { useFormik } from "formik";

function App() {
  const [user, setUser] = useState<boolean | firebase.User | string>("false");
  const formik = useFormik({
    initialValues: { keyword: "" },
    onSubmit: (values) => {},
  });
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
    <Box
      bg={Colors["Dark-Blue"]}
      color={Colors["Pure-White"]}
      overflow={"hidden"}
    >
      <Flex flexDir={["column", "column", "row"]} flex={1}>
        {user === "false" ? (
          <Spinner />
        ) : (
          <>
            <Box
              paddingBlock={["0rem", "1.5rem", "2rem"]}
              paddingInline={["0rem", "1.5rem", "2rem"]}
            >
              <Navbar user={user} />
            </Box>

            <Container>
              <Input
                placeholder={"Search for Movies or Tv Series"}
                icon
                name={"keyword"}
                type="text"
                setFunction={formik.handleChange}
                handleSubmit={formik.handleSubmit}
              />
              <Router>
                <Routes>
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/"
                    element={
                      <Home id={user?.uid} keyWord={formik.values.keyword} />
                    }
                  />
                  <Route
                    path="/movies"
                    element={
                      <Movies id={user?.uid} keyWord={formik.values.keyword} />
                    }
                  />
                  <Route
                    path="/tv_series"
                    element={
                      <TvSeries
                        id={user?.uid}
                        keyWord={formik.values.keyword}
                      />
                    }
                  />
                  {user && (
                    <Route
                      path="/bookmarks"
                      element={
                        <Bookmarks
                          id={user?.uid}
                          keyWord={formik.values.keyword}
                        />
                      }
                    />
                  )}
                  <Route
                    path="/profile"
                    element={<Profile currentUser={user} />}
                  />
                </Routes>
              </Router>
            </Container>
          </>
        )}
      </Flex>
    </Box>
  );
}

export default App;
