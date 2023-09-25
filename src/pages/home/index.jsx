/* eslint-disable react/no-unknown-property */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import Category from '../../components/category';
import Carousel from '../../components/carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'swiper/css';
import {
  nowPlayings,
  populars,
  topRateds,
  trendings,
  upcomings,
} from '../../services/movieService';
import Search from '../search';

export default function Home() {
  const [searchParams] = useSearchParams();

  const nowPlayingMovies = useQuery({ queryKey: ['now_playing', 1], queryFn: () => nowPlayings(1) });
  const upcomingMovies = useQuery({ queryKey: ['upcoming'], queryFn: () => upcomings(1) });
  const popularMovies = useQuery({ queryKey: ['popular'], queryFn: () => populars(1) });
  const topRatedMovies = useQuery({ queryKey: ['top_rated'], queryFn: () => topRateds(1) });
  const trendingMovies = useQuery({ queryKey: ['trending'], queryFn: () => trendings(1) });
  const nowPlayingMovies2 = useQuery({ queryKey: ['now_playing', 2], queryFn: () => nowPlayings(2) });
  const popularMovies2 = useQuery({ queryKey: ['now_playing', 2], queryFn: () => populars(2) });

  if (searchParams.get('search')) {
    return <Search query={searchParams.get('search')} />;
  }

  return (
    <div className="flex flex-col gap-3 md:gap-12">
      <Carousel movies={nowPlayingMovies.data?.results} loading={nowPlayingMovies.isLoading} />

      <div className="flex justify-center w-full">
        <div className="w-4/5 space-y-3 md:space-y-12 text-webkit-center">
          <Category title="Upcoming Movie" link="upcoming" movies={upcomingMovies.data?.results} loading={upcomingMovies.isLoading} />
          <Category title="Top Rated Movie" link="top-rated" movies={topRatedMovies.data?.results} loading={topRatedMovies.isLoading} />
        </div>
      </div>

      <Carousel movies={nowPlayingMovies2.data?.results} loading={nowPlayingMovies2.isLoading} />

      <div className="flex justify-center w-full">
        <div className="w-4/5 space-y-12 text-webkit-center">
          <Category title="Popular Movie" link="popular" movies={popularMovies.data?.results} loading={popularMovies.isLoading} />
        </div>
      </div>

      <div className="overflow-hidden">
        {popularMovies2.isLoading ? (
          <div className="flex justify-center items-center w-full h-[240px] md:h-[360px] lg:h-[500px] animate-pulse bg-gray-700">
            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        ) : (
          <img
            src={`${process.env.REACT_APP_TMDB_IMAGE_BASE_URI}/original/${popularMovies2.data?.results[2]?.backdrop_path}`}
            className="w-full h-[240px] md:h-[360px] lg:h-[400px] object-fit hover:scale-110 duration-500"
            alt="Banner"
          />
        )}
      </div>

      <div className="flex justify-center w-full">
        <div className="w-4/5 space-y-12 text-webkit-center">
          <Category title="Trending Movie" link="trending" movies={trendingMovies.data?.results} loading={trendingMovies.isLoading} />
        </div>
      </div>
    </div>
  );
}
