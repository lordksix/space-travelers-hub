import { render, screen } from '@testing-library/react';
import Layout from 'components/Layout';
import { BrowserRouter } from 'react-router-dom';

describe('should render layout correctly', () => {
  const MockLayout = () => (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );

  test('should render heading', () => {
    render(<MockLayout />);
    const headingElement = screen.getByRole('heading', { name: /Space Traveler/i });

    expect(headingElement).toBeInTheDocument();
  });
});
