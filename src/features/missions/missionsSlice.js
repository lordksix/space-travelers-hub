import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const APIURL = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  isLoading: false,
  error: undefined,
};

export const getMissions = createAsyncThunk('missions/getMissions', async (thunkAPI) => {
  try {
    const response = await axios.get(APIURL);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Error loading');
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    addSpecialist: (state, action) => {
      const missions = [...state.missions.map((mission) => {
        if (mission.missionId === action.payload) {
          const reserve = !mission.reserve;
          return {
            ...mission,
            reserve,
          };
        }
        return {
          ...mission,
        };
      })];
      return {
        ...state,
        missions,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => ({
        ...state,
        isLoading: true,
        error: undefined,
      }))
      .addCase(getMissions.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }))
      .addCase(getMissions.fulfilled, (state, action) => {
        const missions = action.payload.map((load) => {
          const missionId = load.mission_id;
          const missionName = load.mission_name;
          const { description } = load;
          const reserve = false;
          return {
            reserve,
            missionId,
            missionName,
            description,
          };
        });
        return {
          ...state,
          isLoading: false,
          error: undefined,
          missions,
        };
      });
  },
});

export const {
  addSpecialist,
} = missionsSlice.actions;

export const selectMission = (state) => state.missions;

export default missionsSlice.reducer;
