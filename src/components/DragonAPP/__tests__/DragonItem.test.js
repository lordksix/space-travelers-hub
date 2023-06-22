import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'features/store';
import DragonItem from '../DragonItems';

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

const dragonObj = {
  name: 'rocket1',
  image: 'image',
  description: 'description',
  reserved: false,
  id: 'sdsd',
};

test('should render MissionsRow component', async () => {
  render(<DragonItem
    dragon={dragonObj}
  />, { wrapper: AllTheProviders });
  expect(screen.getAllByText(/reserve/i).length).toBe(1);
});
