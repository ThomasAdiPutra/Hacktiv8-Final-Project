import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

export default function Carousel({ movies, loading }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-[240px] md:h-[360px] lg:h-[500px] animate-pulse bg-gray-700">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
    );
  }

  return (
    <ReactCarousel
      className="h-fit z-10"
      showArrows
      infiniteLoop
      autoPlay
      interval={5000}
      transitionTime={1000}
      showThumbs={false}
      showIndicators={false}
      dynamicHeight={false}
      showStatus={false}
      swipeable
      stopOnHover
    >
      {movies.map((movie, index) => (
        <div className="group" key={`${movies.id}-${index}`}>
          <img src={`${process.env.REACT_APP_TMDB_IMAGE_BASE_URI}/original/${movie.backdrop_path}`} className="w-full h-[240px] md:h-[360px] lg:h-[500px] object-fit" alt={movie.title} />
          <div className="legend !bg-transparent !opacity-30 !text-left !top-0 !h-full !w-full flex flex-col justify-center gap-1 md:gap-3 md:mt-8 group-hover:!opacity-100">
            <p className="text-3xl md:text-5xl font-bold font-mono font-outline">{movie.title}</p>
            <p className="text-lg md:text-2xl">
              {movie.category}
            </p>

            <Link to={`${movie.id}/${movie.title.toLowerCase().replaceAll(' ', '-')}`} className="bg-red-600 font-medium md:text-lg py-3 px-5 w-fit rounded-md mt-2 md:mt-5 hover:bg-white hover:text-black">Watch Now</Link>
          </div>
        </div>
      ))}
    </ReactCarousel>
  );
}
