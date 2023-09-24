import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

export default function Header() {
  const [showSearchButton, setShowSearchButton] = React.useState(false);

  const handleClick = () => {
    setShowSearchButton(!showSearchButton);
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
        <div data-testid="searchbox" className="items-center rounded-md bg-gray-700 px-2 gap-1" style={{ display: showSearchButton ? 'none' : 'flex' }}>
          <FaSearch className="text-white" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
            className="px-1 py-0.5 border-0 items-center text-white w-40 focus:outline-none bg-gray-700"
          />
        </div>
        <button type="button" data-testid="search-button" onClick={handleClick} className="block md:hidden">
          <FaSearch size={20} />
        </button>
      </div>
    </div>
  );
}
