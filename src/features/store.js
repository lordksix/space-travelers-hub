import { configureStore } from '@reduxjs/toolkit';

import rocketsReducer from 'features/rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
=======
import missionReducer from 'features/missions/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,

  },
});

export default store;
