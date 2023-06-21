import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';
import store from 'features/store';
import { serverMissions, serverRockets } from 'mocks/server';
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

describe('test click mission navbar', () => {
  beforeAll(() => serverMissions.listen());
  afterAll(() => serverMissions.close());
  afterEach(() => serverMissions.resetHandlers());

  test('full app rendering/navigating', async () => {
    render(<App />, { wrapper: AllTheProviders });

    expect(screen.getByText(/Space Traveler/i)).toBeInTheDocument();
  });

  test('full app rendering/navigating', async () => {
    render(<App />, { wrapper: AllTheProviders });
    const user = userEvent.setup();

    // verify page content for expected route after navigating
    await user.click(screen.getByText(/missions/i));
    expect(screen.getByText(/status|loading|(Error:)/i)).toBeInTheDocument();
  });
});

describe('test click rockets navbar', () => {
  beforeAll(() => serverRockets.listen());
  afterAll(() => serverRockets.close());
  afterEach(() => serverRockets.resetHandlers());

  test('full app rendering/navigating', async () => {
    render(<App />, { wrapper: AllTheProviders });

    expect(screen.getByText(/Space Traveler/i)).toBeInTheDocument();
  });

  test('full app rendering/navigating', async () => {
    render(<App />, { wrapper: AllTheProviders });
    const user = userEvent.setup();

    // verify page content for expected route after navigating
    await user.click(screen.getByText(/rockets/i));
    expect(screen.getAllByText(/reserv|loading|(Error:)/i).length).toBeGreaterThan(0);
  });
});

describe('test click profile navbar', () => {
  beforeAll(() => serverRockets.listen());
  afterAll(() => serverRockets.close());
  afterEach(() => serverRockets.resetHandlers());

  test('full app rendering/navigating', async () => {
    render(<App />, { wrapper: AllTheProviders });

    expect(screen.getByText(/Space Traveler/i)).toBeInTheDocument();
  });

  test('full app rendering/navigating', async () => {
    render(<App />, { wrapper: AllTheProviders });
    const user = userEvent.setup();

    // verify page content for expected route after navigating
    await user.click(screen.getByText(/profile/i));
    expect(screen.getByText(/my missions/i)).toBeInTheDocument();
  });
});
