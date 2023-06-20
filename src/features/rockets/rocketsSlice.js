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
  rocketsItems: [],
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
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        if (state.rocketsItems.length === 0) {
          action.payload.forEach((elt) => {
            const rocket = {
              id: elt.id,
              name: elt.name,
              description: elt.description,
              type: elt.type,
              image: elt.flickr_images[0],
            };
            state.rocketsItems.push(rocket);
          });
        }
        state.isLoading = false;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});
export default rocketsSlice.reducer;
