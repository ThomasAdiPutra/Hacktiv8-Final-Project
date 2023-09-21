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
    <div className="flex flex-col min-h-screen max-w-screen">
      <Header bgColor={bgColor} />
      <div className="flex-1">
        <Outlet />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          quidem quam et dolorum vero esse. Deserunt necessitatibus magnam non
          rem aspernatur. Veritatis, pariatur earum. Error maxime quod esse illo
          nihil? Provident, repudiandae earum mollitia laborum ab aspernatur
          culpa officiis blanditiis sit optio fuga, est quod qui a ipsam
          similique commodi incidunt sed! Blanditiis, corrupti. Odio rem
          deleniti dolor quaerat nulla. Recusandae tenetur ab quasi incidunt
          suscipit aspernatur alias enim ducimus iure ipsum voluptatem commodi
          iusto accusantium omnis quos hic, fuga illo blanditiis harum, culpa
          quod soluta sapiente fugiat! Cupiditate, quod! Accusantium vitae
          accusamus esse impedit dolor! Enim laborum error incidunt iure dolor
          consequatur quasi doloremque voluptatum velit voluptates provident
          ipsa maiores, aut veritatis alias suscipit harum! Nam facere quam
          eaque. Eaque numquam doloribus tempora fugit quibusdam odit officiis
          saepe mollitia iusto nulla excepturi optio rerum quisquam, earum
          similique tenetur officia! Voluptatum eius minima nulla! Nisi enim ea
          neque doloribus quidem?
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          quidem quam et dolorum vero esse. Deserunt necessitatibus magnam non
          rem aspernatur. Veritatis, pariatur earum. Error maxime quod esse illo
          nihil? Provident, repudiandae earum mollitia laborum ab aspernatur
          culpa officiis blanditiis sit optio fuga, est quod qui a ipsam
          similique commodi incidunt sed! Blanditiis, corrupti. Odio rem
          deleniti dolor quaerat nulla. Recusandae tenetur ab quasi incidunt
          suscipit aspernatur alias enim ducimus iure ipsum voluptatem commodi
          iusto accusantium omnis quos hic, fuga illo blanditiis harum, culpa
          quod soluta sapiente fugiat! Cupiditate, quod! Accusantium vitae
          accusamus esse impedit dolor! Enim laborum error incidunt iure dolor
          consequatur quasi doloremque voluptatum velit voluptates provident
          ipsa maiores, aut veritatis alias suscipit harum! Nam facere quam
          eaque. Eaque numquam doloribus tempora fugit quibusdam odit officiis
          saepe mollitia iusto nulla excepturi optio rerum quisquam, earum
          similique tenetur officia! Voluptatum eius minima nulla! Nisi enim ea
          neque doloribus quidem?
        </p>
      </div>
    </div>
  );
}
