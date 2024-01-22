import React from "react";
import movie from "../assets/Movie.svg";
import { Box, Flex, Img } from "@chakra-ui/react";
import Colors from "../Colors.json";
import home from "../assets/icon-nav-home.svg";
import movies from "../assets/icon-nav-movies.svg";
import tv_series from "../assets/icon-nav-tv-series.svg";
import bookmark from "../assets/icon-nav-bookmark.svg";
import avatar from "../assets/image-avatar.png";
function Navbar() {
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
      w={["100%", "100%", "fit-content"]}
      flexDir={["row", "row", "column"]}
      h={["fit-content", "fit-content", "100%"]}
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
      <Img
        src={avatar}
        alt="avatar"
        border="1px solid #FFF"
        borderRadius={"1.5rem"}
        w={["1.5rem", "1.5rem", "2.5rem"]}
        h={["1.5rem", "1.5rem", "2.5rem"]}
      />
    </Flex>
  );
}

export default Navbar;
