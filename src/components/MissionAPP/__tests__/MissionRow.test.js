import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'features/store';
import MissionRow from '../MissionRow';

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

test('should render MissionsRow component', async () => {
  render(<MissionRow
    missionName="mission1"
    missionId="missionid1"
    description="description"
    reserve={false}
  />, { wrapper: AllTheProviders });
  expect(screen.getAllByText(/member/i).length).toBe(1);
});
