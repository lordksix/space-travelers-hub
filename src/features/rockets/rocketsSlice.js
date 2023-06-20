import { createSlice } from '@reduxjs/toolkit';

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
