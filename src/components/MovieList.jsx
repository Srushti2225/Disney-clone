import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalAPI";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  const elementRef = useRef(null);
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  const isHorizontal = index_ % 3 === 0;

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${isHorizontal ? "mt-[60px]" : "mt-[100px]"}`}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-3 md:gap-6
     scrollbar-hide scroll-smooth pt-5 pb-1 px-3"
      >
        {movieList.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {isHorizontal ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </div>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${isHorizontal ? "mt-[60px]" : "mt-[100px]"}`}
      />
    </div>
  );
}

export default MovieList;