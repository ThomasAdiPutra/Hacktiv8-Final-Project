import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggle } from '../../redux/store';

export default function Movie({
  id,
  title,
  date,
  poster,
  loading,
}) {
  const showAds = useSelector((state) => state.showAds.showAds);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(toggle());
    if (showAds) {
      return window.open('https://siakad.untan.ac.id', '_blank');
    }
    return navigate(`/${id}/${title.toLowerCase().replaceAll(' ', '-')}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[210px] w-[140px] md:h-[263px] md:w-[175px] lg:h-[365px] lg:w-[243px] min-[2560px]:w-[300px] min-[2560px]:h-[500px] rounded-xl animate-pulse bg-gray-700">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="h-[210px] w-[140px] md:h-[263px] md:w-[175px] lg:h-[365px] lg:w-[243px] min-[2560px]:w-[300px] min-[2560px]:h-[500px] rounded-xl overflow-hidden group">
      <img
        src={`${process.env.REACT_APP_TMDB_IMAGE_BASE_URI}/w500/${poster}`}
        className="h-full w-full object-cover z-10 group-hover:scale-125 duration-500"
        alt={title}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x450/000000/FFFFFF/?text=Image+Not+Found';
        }}
      />
      <div className="relative text-center w-[140px] md:w-[175px] lg:w-[243px] min-[2560px]:w-[300px]">
        <div
          className={`
            group-hover:-translate-y-full group-hover:-mt-2 duration-300 text-center text-white z-20 absolute w-full px-2
          `}
        >
          <p className="font-bold text-sm md:text-md lg:text-lg hover:text-orange-400 overflow-clip">{title}</p>
          <p className="text-sm md:text-md">{date ? date.split('-')[0] : 'Coming Soon'}</p>
          <button
            type="button"
            className="px-3 py-1 mt-1.5 text-sm bg-red-600 rounded-md hover:bg-white hover:text-black"
            onClick={handleClick}
          >
            Watch Now!
          </button>
        </div>
        <div className="group-hover:-translate-y-24 md:group-hover:-translate-y-36 duration-300 bg-slate-600 blur-2xl h-48 w-[480px] min-[2560px]:w-[600px] absolute z-10 -mx-16" />
      </div>
    </div>
  );
}
