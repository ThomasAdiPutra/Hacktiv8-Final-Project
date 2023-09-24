import { render, screen } from '@testing-library/react';
import Footer from '../index';

describe('Footer', () => {
  it('should render the footer component correctly', () => {
    render(<Footer />);
    const copyright = screen.getByText('© 2023 Design by');
    const link = screen.getByRole('link');

    expect(copyright).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});
