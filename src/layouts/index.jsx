import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import horizontal from '../assets/ads/horizontal.gif';
import vertical from '../assets/ads/vertical.gif';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="sticky top-1/3 z-50 -mt-[175px] md:-mt-80 w-fit">
        <a href="/" rel="noreferrer" target="_BLANK" className="w-fit block">
          <img
            alt="vertical"
            src={vertical}
            className="h-[200px] md:h-80 object-fit z-50 -my-3 md:my-0 w-auto md:w-24"
          />
        </a>
      </div>
      <div className="w-full h-full text-center mx-auto top-0">
        <a href="/" rel="noreferrer" target="_BLANK">
          <img
            alt="horizontal"
            src={horizontal}
            className="h-[70px] md:h-32 object-fit z-30 -my-3 md:my-0 w-full"
          />
        </a>
      </div>
      <Header />
      <div className="flex-1 flex flex-col mb-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
