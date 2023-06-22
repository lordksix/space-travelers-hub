// eslint-disable-next-line import/no-extraneous-dependencies
import { setupServer } from 'msw/node';
import { handlersMissions, handlersRockets } from './handlers';

// This configures a request mocking server with the given request handlers.
const serverMissions = setupServer(handlersMissions);
const serverRockets = setupServer(handlersRockets);

export { serverMissions, serverRockets };
