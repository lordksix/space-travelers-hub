import { render, screen } from '@testing-library/react';
import NotMatch from 'routes/NotMatch';

test('Should render message not found', async () => {
  render(<NotMatch />);
  const message = screen.getByText(/Not found!/i);

  expect(message).toBeInTheDocument();
});
