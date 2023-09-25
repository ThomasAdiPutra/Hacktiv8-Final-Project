/* eslint-disable react/no-unknown-property */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { Swiper, SwiperSlide } from 'swiper/react';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import {
  getCredits,
  getImages,
  getMovieById,
  getRecommendations,
  getSimilarMovies,
} from '../../services/movieService';
import Category from '../../components/category';

export default function Detail() {
  const { id: movieId } = useParams();

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

  const { data, isLoading, isError } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getMovieById(movieId),
  });

  const images = useQuery({
    queryKey: ['images', movieId],
    queryFn: () => getImages(movieId),
  });

  const similars = useQuery({
    queryKey: ['similar', movieId],
    queryFn: () => getSimilarMovies(movieId),
  });

  const recommendations = useQuery({
    queryKey: ['similar', movieId],
    queryFn: () => getRecommendations(movieId, 2),
  });

  const credits = useQuery({
    queryKey: ['credits', movieId],
    queryFn: () => getCredits(movieId),
  });

  if (isLoading || credits.isLoading || images.isLoading) {
    return (
      <div className="flex-1 bg-black bg-opacity-75 p-5 md:px-16 lg:px-36 md:py-8 lg:py-16">
        <div className="overflow-auto flex flex-col md:flex-row gap-5 md:gap-6 lg:gap-12">
          <div className="flex justify-center">
            <div
              className="h-[360px] w-[280px] rounded-xl shadow-xl float-left animate-pulse bg-gray-700"
            />
          </div>
          <div className="flex flex-col justify-between pb-0 lg:pb-5">
            <div className="flex flex-col gap-3">
              <span className="animate-pulse rounded-full w-36 h-3 bg-gray-700" />
              <div className="flex gap-3">
                <span className="animate-pulse rounded-full w-20 h-3 bg-gray-700" />
                <span className="animate-pulse rounded-full w-16 h-3 bg-gray-700" />
                <span className="animate-pulse rounded-full w-28 h-3 bg-gray-700" />
              </div>
              <div className="animate-pulse rounded-full w-48 h-3 bg-gray-700" />
              <div className="flex flex-col gap-3 mt-5">
                <div className="animate-pulse rounded-full w-5/6 h-3 bg-gray-700" />
                <div className="animate-pulse rounded-full w-full h-3 bg-gray-700" />
                <div className="animate-pulse rounded-full w-5/6 h-3 bg-gray-700" />
                <div className="animate-pulse rounded-full w-4/5 h-3 bg-gray-700" />
                <div className="animate-pulse rounded-full w-full h-3 bg-gray-700" />
                <div className="animate-pulse rounded-full w-full h-3 bg-gray-700" />
                <div className="animate-pulse rounded-full w-3/5 h-3 bg-gray-700" />
              </div>
            </div>
            <div className="text-lg space-y-3 mt-8 md:mt-0">
              <div className="flex gap-2">
                <div className="animate-pulse rounded-full w-16 h-3 bg-gray-700" />
                <span className="animate-pulse rounded-full w-32 h-3 bg-gray-700" />
              </div>
              <div className="flex gap-2">
                <div className="animate-pulse rounded-full w-16 h-3 bg-gray-700" />
                <span className="animate-pulse rounded-full w-32 h-3 bg-gray-700" />
              </div>
              <div className="flex gap-2">
                <div className="animate-pulse rounded-full w-16 h-3 bg-gray-700" />
                <span className="animate-pulse rounded-full w-32 h-3 bg-gray-700" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-5 mt-5">
          {Array(6).fill().map((_, index) => (
            <div key={index} className="flex justify-center items-center w-[120px] md:w-[200px] h-24 md:h-32 animate-pulse rounded-xl bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          ))}
        </div>

        <div className="mt-6 lg:mt-16 flex flex-col gap-8 text-webkit-center">
          <Category title="Similar Movies" loading />
          <Category title="Recommendation" loading />
        </div>
      </div>
    );
  }

  if (isError || credits.isError || images.isError || similars.isError || recommendations.isError) {
    return (
      <div className="flex-1 flex justify-center items-center">
        <p className="text-white text-2xl">Something went wrong...</p>
      </div>
    );
  }

  return (
    <div
      className="!bg-cover flex-1 flex flex-col -mb-5"
      style={{
        background: `url('${process.env.REACT_APP_TMDB_IMAGE_BASE_URI}/original/${data.backdrop_path}')`,
      }}
    >
      <div className="flex-1 bg-black bg-opacity-75 p-5 md:px-16 lg:px-36 md:py-8 lg:py-16">
        <div className="overflow-auto flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-12">
          <img
            src={`${process.env.REACT_APP_TMDB_IMAGE_BASE_URI}/original/${data.poster_path}`}
            onError={(e) => {
              e.src = `${process.env.REACT_APP_TMDB_IMAGE_BASE_URI}/original/${data.backdrop_path}`;
            }}
            alt={data.title}
            className="max-h-[360px] md:max-h-[480px] rounded-xl shadow-xl float-left"
          />
          <div className="flex flex-col justify-between pb-0 lg:pb-5">
            <div>
              <p className="font-bold text-3xl text-white">{data.title}</p>
              <div className="flex flex-wrap gap-3">
                <span>
                  {data.runtime}
                  &nbsp; Min
                </span>
                <span>|</span>
                <span>
                  {data.release_date ? data.release_date.split('-')[0] : 'Coming Soon'}
                </span>
                <span>|</span>
                <span>{data.genres.map((genre) => genre.name).join(', ')}</span>
              </div>
              <div className="my-2 flex items-end">
                <StarRatings
                  rating={data.vote_average}
                  numberOfStars={10}
                  starRatedColor="#F59E0B"
                  starEmptyColor="#aaa"
                  starDimension="20px"
                  starSpacing="2px"
                />
                <div className="ms-2 -mb-0.5">
                  (
                  {data.vote_average}
                  )
                </div>
              </div>
              <p className="mt-5 text-white text-lg">{data.overview}</p>
            </div>
            <div className="text-lg space-y-3">
              {
                credits.isLoading ? (
                  <div className="bg-gray-700 px-3 py-1 rounded-md animate-pulse h-5 w-20" />
                ) : (
                  <div>
                    <span className="text-red-600 uppercase font-mono">Director</span>
                    <span> : </span>
                    <span>
                      {credits.data?.crew?.map((credit) => {
                        if (credit?.job?.includes('Director')) {
                          return credit.name;
                        }
                        return undefined;
                      }).filter((credit) => credit).join(', ')}
                    </span>
                  </div>
                )
              }
              {
                credits.isLoading ? (
                  <div className="bg-gray-700 px-3 py-1 rounded-md animate-pulse h-5 w-20" />
                ) : (
                  <div>
                    <span className="text-red-600 uppercase font-mono">Writer</span>
                    <span> : </span>
                    <span>
                      {credits.data?.crew?.map((credit) => {
                        if (credit?.department?.includes('Writing')) {
                          return credit.name;
                        }
                        return undefined;
                      }).filter((credit) => credit).join(', ')}
                    </span>
                  </div>
                )
              }
              <div>
                <span className="text-red-600 uppercase font-mono">Language</span>
                <span> : </span>
                <span>{data.spoken_languages?.map((language) => language.english_name).join(', ')}</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          {images.isLoading ? (
            <div className="flex justify-center items-center w-full h-[240px] md:h-[360px] lg:h-[500px] animate-pulse bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          ) : (
            <div className="mt-5">
              <Swiper
                breakpoints={breakpoints}
              >
                {
                  images.data?.backdrops?.slice(0, 10).map((image, index) => (
                    <SwiperSlide key={`${image.id}-${index}`} className="!block w-12">
                      <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        galleryId={`gallery-${index}`}
                      >
                        <a href={`${process.env.REACT_APP_TMDB_IMAGE_BASE_URI}/original${image.file_path}`}>
                          <img
                            alt={data.title}
                            src={`${process.env.REACT_APP_TMDB_IMAGE_BASE_URI}/w300${image.file_path}`}
                            className="rounded-xl"
                          />
                        </a>
                      </LightGallery>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          )}
        </div>

        <div className="mt-6 lg:mt-16 flex flex-col gap-8 text-webkit-center">
          <Category title="Similar Movies" movies={similars.data} loading={similars.isLoading} />
          <Category title="Recommendation" movies={recommendations.data} loading={recommendations.isLoading} />
        </div>
      </div>
    </div>
  );
}
