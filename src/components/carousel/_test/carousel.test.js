import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Carousel from '..';

describe('Carousel', () => {
  it('should render the carousel component correctly', () => {
    const movies = [
      {
        adult: false,
        backdrop_path: '/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg',
        genre_ids: [
          27,
          53,
        ],
        id: 1008042,
        original_language: 'en',
        original_title: 'Talk to Me',
        overview: 'When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.',
        popularity: 1915.126,
        poster_path: '/kdPMUMJzyYAc4roD52qavX0nLIC.jpg',
        release_date: '2023-07-26',
        title: 'Talk to Me',
        video: false,
        vote_average: 7.3,
        vote_count: 732,
      },
      {
        adult: false,
        backdrop_path: '/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg',
        genre_ids: [
          35,
          12,
          14,
        ],
        id: 346698,
        original_language: 'en',
        original_title: 'Barbie',
        overview: 'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
        popularity: 1655.953,
        poster_path: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
        release_date: '2023-07-19',
        title: 'Barbie',
        video: false,
        vote_average: 7.3,
        vote_count: 4824,
      },
      {
        adult: false,
        backdrop_path: '/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg',
        genre_ids: [
          28,
          878,
          27,
        ],
        id: 615656,
        original_language: 'en',
        original_title: 'Meg 2: The Trench',
        overview: 'An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.',
        popularity: 1627.214,
        poster_path: '/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg',
        release_date: '2023-08-02',
        title: 'Meg 2: The Trench',
        video: false,
        vote_average: 7,
        vote_count: 1853,
      },
    ];

    const { container } = render(<Carousel movies={movies} />, { wrapper: BrowserRouter });
    const slides = container.getElementsByClassName('slide');
    const singleClassSlides = Array.from(slides).filter((slide) => slide.classList.length === 1);

    expect(singleClassSlides).toHaveLength(movies.length);
  });

  it("shouldn't render the data when loading", () => {
    const { container } = render(<Carousel loading />, { wrapper: BrowserRouter });
    const slides = container.getElementsByClassName('slide');

    expect(slides).toHaveLength(0);
  });
});
