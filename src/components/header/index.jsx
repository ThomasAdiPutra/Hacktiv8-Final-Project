import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

export default function Header() {
  const [search, setSearch] = React.useState('');
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setSearch(e.target.value.replace(/ /g, '%20'));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/?search=${search}`);
  };

  return (
    <div
      className="text-white sticky top-0 flex items-center justify-between py-5 px-4 sm:px-16 bg-gray-800 z-20"
    >
      <div className="flex items-center gap-16">
        <Link to="/">
          <div className="flex gap-2 items-center">
            <img src={Logo} alt="Logo" style={{ height: 30 }} />
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-1">
        <form action="#" onSubmit={handleSubmit}>
          <div data-testid="searchbox" className="ms-3 md:ms-0 flex items-center rounded-md bg-gray-700 px-2 gap-1">
            <FaSearch className="text-gray-500 hidden md:inline-block text-sm" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
              className="px-1 py-0.5 border-0 items-center text-white w-24 md:w-40 focus:outline-none bg-gray-700"
              onChange={handleOnChange}
            />
            <button type="submit">
              <FaSearch className="text-white" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
