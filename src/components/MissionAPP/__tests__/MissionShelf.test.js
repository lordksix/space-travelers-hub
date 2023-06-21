import { render, screen, waitFor } from '@testing-library/react';
import { serverMissions } from 'mocks/server';
import { Provider } from 'react-redux';
import store from 'features/store';
import MissionShelf from '../MissionShelf';

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

beforeAll(() => serverMissions.listen());
afterAll(() => serverMissions.close());
afterEach(() => serverMissions.resetHandlers());

test('should render MissionsShelf component', async () => {
  render(<MissionShelf />, { wrapper: AllTheProviders });
  await waitFor(() => expect(screen.getAllByText(/mission/i).length).toBe(1));
});
