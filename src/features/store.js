import { configureStore } from '@reduxjs/toolkit';
import missionReducer from 'features/missions/missionsSlice';
import rocketsReducer from 'features/rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionReducer,
  },
});

export default store;
