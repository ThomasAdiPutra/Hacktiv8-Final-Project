import { render, screen } from '@testing-library/react';
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
});
