import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';
export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return rejectWithValue('Failed to fetch rockets data !!');
  }
});

const initialState = {
  rocketItems: [],
  isLoading: true,
  error: undefined,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        if (state.rocketItems.length === 0) {
          action.payload.forEach((elt) => {
            const rocket = {
              id: elt.id,
              name: elt.name,
              description: elt.description,
              type: elt.type,
              image: elt.flickr_images[0],
            };
            state.rocketItems.push(rocket);
          });
        }
        state.isLoading = false;
        state.error = undefined;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const getRockets = (state) => (state.rockets);
export default rocketsSlice.reducer;
