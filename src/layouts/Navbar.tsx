import movie from "../assets/Movie.svg";
import { Box, Flex, Img } from "@chakra-ui/react";
import Colors from "../Colors.json";
import home from "../assets/icon-nav-home.svg";
import movies from "../assets/icon-nav-movies.svg";
import tv_series from "../assets/icon-nav-tv-series.svg";
import bookmark from "../assets/icon-nav-bookmark.svg";
import avatar from "../assets/image-avatar.png";
import { auth } from "../../firebase";
function Navbar() {
  const currentUser = auth.currentUser;
  let navbarLinks = [
    { icon: home, href: "/" },
    { icon: movies, href: "/movies" },
    { icon: tv_series, href: "/tv_series" },
    { icon: bookmark, href: "/bookmarks" },
  ];

  return (
    <Flex
      p="1.75rem"
      bg={Colors["Semi-Dark-Blue"]}
      justifyContent={"space-between"}
      minW={["100%", "100%", "100px"]}
      flexDir={["row", "row", "column"]}
      h={["fit-content", "fit-content", "90vh"]}
      borderRadius={["0px", "10px", "1.25rem"]}
      alignItems={"center"}
    >
      <Flex
        flexDir={"column"}
        display={["contents", "contents", "flex"]}
        gap="4.75rem"
      >
        <Img
          src={movie}
          alt="movie logo"
          w={["25px", "25px", "32px"]}
          h={["20px", "20px", "25px"]}
        />
        <Flex
          gap="23px"
          flexDir={["row", "row", "column"]}
          alignItems={"center"}
        >
          {navbarLinks.map((link) => (
            <Box key={link.href} as="a" href={link.href}>
              <Img
                src={link.icon}
                h={["1rem", "1rem", "1.25rem"]}
                w={["1rem", "1rem", "1.25rem"]}
              />
            </Box>
          ))}
        </Flex>
      </Flex>
      <Box as="a" href={currentUser ? "/profile" : "/login"}>
        <Img
          src={currentUser ? currentUser.photoURL : avatar}
          alt="avatar"
          border="1px solid #FFF"
          borderRadius={"1.5rem"}
          w={["1.5rem", "1.5rem", "2.5rem"]}
          h={["1.5rem", "1.5rem", "2.5rem"]}
        />
      </Box>
    </Flex>
  );
}

export default Navbar;
