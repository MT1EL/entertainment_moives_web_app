import { MediaItem } from "../../../types";
import TrendingMovieBanner from "../Movie/TrendingMovieBanner";
import { Box } from "@chakra-ui/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";
import { updateBookMark } from "../../hooks/user";
function TrendingCarousel({
  data,
  bookMarkedMovies,
  id,
  refresh,
}: {
  data: any;
  bookMarkedMovies: MediaItem[];
  id: string;
  refresh: any;
}) {
  const [slidesPerView, setSlidesPerView] = useState(0);

  const handleResize = () => {
    console.log(window.innerWidth);
    if (window.innerWidth <= 768) {
      setSlidesPerView(1);
    } else if (window.innerWidth <= 1024) {
      setSlidesPerView(2);
    } else if (window.innerWidth > 1024) {
      setSlidesPerView(3);
    }
  };
  useEffect(() => {
    // Initial setup and add resize event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const swiperParams = {
    slidesPerView,
    spaceBetween: 10,
    // Add more configuration options as needed
  };
  return (
    <Box>
      <Swiper {...swiperParams} style={{ maxWidth: "calc(100vw - 32px)" }}>
        {data.map((movie: MediaItem) => (
          <SwiperSlide key={movie.title}>
            <TrendingMovieBanner
              data={movie}
              bookMarkHandler={() => {
                updateBookMark(bookMarkedMovies, id, movie)
                  .then((res) => refresh())
                  .catch((err) => err);
              }}
              bookmarked={
                bookMarkedMovies.findIndex(
                  (bookMarkedMovie) => bookMarkedMovie.title === movie.title
                ) > -1
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default TrendingCarousel;
