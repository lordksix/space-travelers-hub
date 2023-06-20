import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';
export const fetchRockets = createAsyncThunk('rockets/fetchBooks', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(url);
    return response;
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
});
export default rocketsSlice.reducer;
