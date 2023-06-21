import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';
import store from 'features/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </Provider>
);

test('full app rendering/navigating', async () => {
  render(<App />, { wrapper: AllTheProviders });
  const user = userEvent.setup();

  // verify page content for default route
  expect(screen.getByText(/Space Traveler/i)).toBeInTheDocument();

  // verify page content for expected route after navigating
  await user.click(screen.getByText(/missions/i));
<<<<<<< Updated upstream
  expect(screen.getByText(/My Missions/i)).toBeInTheDocument();
=======
  expect(screen.getByText(/(my missions)|loading/i)).toBeInTheDocument();
>>>>>>> Stashed changes
});
