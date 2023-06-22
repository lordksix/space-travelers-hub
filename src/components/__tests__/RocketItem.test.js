import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'features/store';
import RocketItem from 'components/RocketAPP/RocketItems';

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

const rocketObj = {
  name: 'rocket1',
  image: 'image',
  description: 'description',
  reserved: false,
  id: 'sdsd',
};

test('should render MissionsRow component', async () => {
  render(<RocketItem
    rocket={rocketObj}
  />, { wrapper: AllTheProviders });
  expect(screen.getAllByText(/reserve/i).length).toBe(1);
});
