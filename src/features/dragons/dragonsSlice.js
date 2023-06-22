import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const APIURL = 'https://api.spacexdata.com/v4/dragons';

const initialState = {
  dragons: [],
  isLoading: false,
  error: undefined,
};

export const getDragons = createAsyncThunk('dragons/getDragons', async (thunkAPI) => {
  try {
    const response = await axios.get(APIURL);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Error loading');
  }
});

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    toggleReservation: (state, action) => {
      const dragons = [...state.dragons.map((dragon) => {
        if (dragon.id === action.payload) {
          const reserve = !dragon.reserve;
          return {
            ...dragon,
            reserve,
          };
        }
        return {
          ...dragon,
        };
      })];
      return {
        ...state,
        dragons,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDragons.pending, (state) => ({
        ...state,
        isLoading: true,
        error: undefined,
      }))
      .addCase(getDragons.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }))
      .addCase(getDragons.fulfilled, (state, action) => {
        const dragons = action.payload.map((load) => {
          const {
            description, type, id, name,
          } = load;
          const reserve = false;
          return {
            reserve,
            id,
            name,
            description,
            type,
            image: load.flickr_images[0],
          };
        });
        return {
          ...state,
          isLoading: false,
          error: undefined,
          dragons,
        };
      });
  },
});

export const {
  toggleReservation,
} = dragonsSlice.actions;

export const selectDragons = (state) => state.dragons;

export default dragonsSlice.reducer;
