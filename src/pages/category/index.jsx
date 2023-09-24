/* eslint-disable no-nested-ternary */
import React from 'react';
import { useInfiniteQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  nowPlayings,
  populars,
  topRateds,
  trendings,
  upcomings,
} from '../../services/movieService';
import Movie from '../../components/movie';

export default function Category() {
  const category = window.location.pathname.split('/')[1];

  const fetchData = async ({ pageParam = 1 }) => {
    switch (category) {
      case 'now-playing':
        return nowPlayings(pageParam);
      case 'popular':
        return populars(pageParam);
      case 'top-rated':
        return topRateds(pageParam);
      case 'upcoming':
        return upcomings(pageParam);
      case 'trending':
        return trendings(pageParam);
      default:
        return () => {};
    }
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['category', category],
    queryFn: fetchData,
    getNextPageParam: (res) => {
      if (res.page > 500) {
        return undefined;
      }
      return res.page + 1;
    },
  });

  return status === 'loading' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>
      Error:
      {error.message}
    </p>
  ) : (
    <div
      className="w-full flex flex-col items-center py-4 gap-5"
    >
      <p className="capitalize text-3xl font-extrabold text-white text-left w-5/6">
        {category.replaceAll('-', ' ')}
        &nbsp;Movies
      </p>
      <div className="w-5/6">
        <InfiniteScroll
          dataLength={data.pages.length * 20}
          next={fetchNextPage}
          hasMore={hasNextPage || false}
          className="flex justify-center flex-wrap gap-3"
          scrollThreshold={0.5}
          loader={(
            <div className="flex justify-center flex-wrap gap-3">
              <Movie loading />
              <Movie loading />
              <Movie loading />
              <Movie loading />
              <Movie loading />
            </div>
          )}
        >
          {Array(data.pages.length).fill().map((_, i) => (
            <React.Fragment key={i}>
              {data.pages[i].results.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  date={movie.release_date}
                  poster={movie.poster_path}
                />
              ))}
            </React.Fragment>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}
