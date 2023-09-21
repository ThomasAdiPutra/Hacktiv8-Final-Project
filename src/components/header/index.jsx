import React from 'react';
import Logo from '../../assets/images/logo.png';

export default function Header({ bgColor }) {
  return (
    <div
      className="text-white sticky top-0 flex items-center justify-between py-2 md:py-3 px-4 md:px-16"
      style={{
        background: bgColor,
      }}
    >
      <div className="flex gap-20">
        <img src={Logo} alt="Logo" style={{ height: 25 }} />
        <ul className="flex gap-5">
          <li>Home</li>
          <li>Series</li>
          <li>Movies</li>
        </ul>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className="rounded-sm px-2"
        />
      </div>
    </div>
  );
}
