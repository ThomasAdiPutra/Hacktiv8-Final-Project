import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '..';

describe('Layout', () => {
  it('should contains header and footer', () => {
    render(<Layout />, { wrapper: BrowserRouter });
    const logo = screen.getByAltText('Logo');
    const search = screen.getByTestId('searchbox');
    const copyright = screen.getByText('© 2023 Design by');

    expect(logo).toBeInTheDocument();
    expect(search).toBeInTheDocument();
    expect(copyright).toBeInTheDocument();
  });
});
