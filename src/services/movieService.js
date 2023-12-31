import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_TMDB_BASE_URI,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
});

const nowPlayings = async (page = 1) => {
  const response = await axiosInstance.get(`movie/now_playing?page=${page}`);
  const result = await response.data;
  return result;
};

const populars = async (page = 1) => {
  const response = await axiosInstance.get(`movie/popular?page=${page}`);
  const result = await response.data;
  return result;
};

const topRateds = async (page = 1) => {
  const response = await axiosInstance.get(`movie/top_rated?page=${page}`);
  const result = await response.data;
  return result;
};

const upcomings = async (page = 1) => {
  const response = await axiosInstance.get(`movie/upcoming?page=${page}`);
  const result = await response.data;
  return result;
};

const trendings = async (page = 1) => {
  const response = await axiosInstance.get(`trending/movie/week?page=${page}`);
  const result = await response.data;
  return result;
};

const getMovieById = async (id) => {
  const response = await axiosInstance.get(`movie/${id}`);
  const result = await response.data;
  return result;
};

const getSimilarMovies = async (id, page = 1) => {
  const response = await axiosInstance.get(`movie/${id}/similar?page=${page}`);
  const result = await response.data;
  return result.results;
};

const getVideos = async (id) => {
  const response = await axiosInstance.get(`movie/${id}/videos`);
  const result = await response.data;
  return result.results;
};

const getImages = async (id) => {
  const response = await axiosInstance.get(`movie/${id}/images`);
  const result = await response.data;
  return result;
};

const getRecommendations = async (id, page = 1) => {
  const response = await axiosInstance.get(
    `movie/${id}/recommendations?page=${page}`,
  );
  const result = await response.data;
  return result.results;
};

const getCredits = async (id) => {
  const response = await axiosInstance.get(`movie/${id}/credits`);
  const result = await response.data;
  return result;
};

const search = async (query, page = 1) => {
  const response = await axiosInstance.get(
    `search/movie?query=${query}&page=${page}`,
  );
  const result = await response.data;
  return result;
};

export {
  nowPlayings,
  populars,
  topRateds,
  upcomings,
  trendings,
  getMovieById,
  getSimilarMovies,
  getVideos,
  getImages,
  getRecommendations,
  getCredits,
  search,
};
