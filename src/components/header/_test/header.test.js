import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '..';

describe('Header', () => {
  it('should render the header component correctly', () => {
    render(<Header />, { wrapper: BrowserRouter });
    const logo = screen.getByAltText('Logo');
    const search = screen.getByTestId('searchbox');

    expect(logo).toBeInTheDocument();
    expect(search).toBeInTheDocument();
  });

  it("shouldn't show the search button when innerwidth is greater than equal 768px", () => {
    render(<Header />, { wrapper: BrowserRouter });
    window.innerWidth = 768;
    fireEvent(window, new Event('resize'));
    const searchButton = screen.getByTestId('search-button');
    expect(searchButton).toHaveClass('block md:hidden');
  });

  it('should toggle visible the search box when search button is clicked', () => {
    render(<Header />, { wrapper: BrowserRouter });
    const searchButton = screen.getByTestId('search-button');
    const searchBox = screen.getByTestId('searchbox');
    fireEvent.click(searchButton);
    expect(searchBox).not.toBeVisible();
    fireEvent.click(searchButton);
    expect(searchBox).toBeVisible();
  });
});
