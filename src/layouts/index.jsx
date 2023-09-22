/* eslint-disable max-len */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

export default function Layout() {
  const [bgColor, setBgColor] = React.useState('rgba(0,0,0,0.5)');

  const onScrollEventHandler = () => {
    if (window.scrollY > 20) {
      setBgColor('rgba(0,0,0,1)');
    } else {
      setBgColor('rgba(0,0,0,0.5)');
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', onScrollEventHandler);
    return () => {
      window.removeEventListener('scroll', onScrollEventHandler);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header bgColor={bgColor} />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
