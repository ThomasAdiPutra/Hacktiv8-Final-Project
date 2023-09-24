/* eslint-disable import/no-unresolved */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Movie from '../movie';

export default function Category({
  title,
  movies,
  link = '',
  loading = true,
}) {
  const [swiperInstance, setSwiperInstance] = React.useState(null);

  const handlePrevSlide = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1441: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1920: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  };

  if (loading) {
    return (
      <div>
        <div className="flex justify-between items-center border-b border-gray-600 py-2 mb-3">
          <p className="bg-gray-700 px-3 py-1 rounded-full animate-pulse h-10 w-64" />
          <div className="flex gap-2">
            <button type="button" className="bg-gray-700 px-3 py-1 rounded-md animate-pulse h-7 w-5"> </button>
            <button type="button" className="bg-gray-700 px-3 py-1 rounded-md animate-pulse h-7 w-16"> </button>
            <button type="button" className="bg-gray-700 px-3 py-1 rounded-md animate-pulse h-7 w-5"> </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          breakpoints={breakpoints}
          navigation
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
          }}
        >
          {Array(6).fill().map((_, index) => (
            <SwiperSlide key={index}>
              <Movie loading />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center border-b border-gray-600 py-2 mb-3">
        <p className="font-bold text-md xl:text-3xl text-white">{title}</p>
        <div className="flex gap-2">
          <button type="button" className="text-white text-md xl:text-xl bg-gray-700 px-3 py-1 rounded-md hover:bg-red-600" onClick={handlePrevSlide}>
            <FaArrowLeft />
          </button>
          <Link
            to={link}
            className="text-white text-md xl:text-xl bg-gray-700 px-3 py-1 rounded-md hover:bg-red-600"
          >
            See all
          </Link>
          <button type="button" className="text-white text-md xl:text-xl bg-gray-700 px-3 py-1 rounded-md hover:bg-red-600" onClick={handleNextSlide}>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        breakpoints={breakpoints}
        navigation
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}
      >
        {movies?.map((movie, index) => (
          <SwiperSlide key={`${movie.id}-${index}`}>
            <Movie
              id={movie.id}
              title={movie.title}
              date={movie.release_date}
              poster={movie.poster_path}
              loading={loading}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
