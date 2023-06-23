import { configureStore } from '@reduxjs/toolkit';
import missionReducer from 'features/missions/missionsSlice';
import rocketsReducer from 'features/rockets/rocketsSlice';
import dragonReducer from 'features/dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionReducer,
    dragons: dragonReducer,
  },
});

export default store;
