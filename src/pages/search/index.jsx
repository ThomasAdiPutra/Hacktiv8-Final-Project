import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteQuery } from 'react-query';
import { search } from '../../services/movieService';
import Movie from '../../components/movie';

export default function Search({ query }) {
  const fetchData = async ({ pageParam = 1 }) => search(query, pageParam);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['search', query],
    queryFn: fetchData,
    getNextPageParam: (res) => {
      if (res.page > 500 || res.page === res.total_pages) {
        return false;
      }
      return res.page + 1;
    },
  });

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'error') {
    return (
      <p>
        Error:
        {error.message}
      </p>
    );
  }

  return (
    <div
      className="w-full flex flex-col items-center py-4 gap-5"
    >
      <p className="capitalize text-3xl font-extrabold text-white text-left w-5/6">
        {data.pages[0].total_results === 0 ? 'No Result for: ' : 'Result for: '}
        {query}
      </p>
      <div className="w-5/6">
        <InfiniteScroll
          dataLength={data.pages.length * 20}
          next={fetchNextPage}
          hasMore={hasNextPage}
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
