import { render, screen, waitFor } from '@testing-library/react';
import { serverDragons } from 'mocks/server';
import { Provider } from 'react-redux';
import store from 'features/store';
import DragonList from '../DragonsList';

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

beforeAll(() => serverDragons.listen());
afterAll(() => serverDragons.close());
afterEach(() => serverDragons.resetHandlers());

test('should render Dragon List component', async () => {
  render(<DragonList />, { wrapper: AllTheProviders });
  await waitFor(() => expect(screen.getAllByText(/reserv|loading|(Error:)/i).length).toBeGreaterThan(0));
});
