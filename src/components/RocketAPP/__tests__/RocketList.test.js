import { render, screen, waitFor } from '@testing-library/react';
import { serverRockets } from 'mocks/server';
import { Provider } from 'react-redux';
import store from 'features/store';
import RocketsList from '../RocketsList';

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

beforeAll(() => serverRockets.listen());
afterAll(() => serverRockets.close());
afterEach(() => serverRockets.resetHandlers());

test('should render RocketList component', async () => {
  render(<RocketsList />, { wrapper: AllTheProviders });
  await waitFor(() => expect(screen.getAllByText(/reserv|loading|(Error:)/i).length).toBeGreaterThan(0));
});
