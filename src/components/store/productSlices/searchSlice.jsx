import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
  },
  reducers: {
    setSearchTerm (state, action) {
      const searchTerm = action.payload
      state.searchTerm = searchTerm;
    },
  },
});

export const searchSliceActions = searchSlice.actions;
export default searchSlice;