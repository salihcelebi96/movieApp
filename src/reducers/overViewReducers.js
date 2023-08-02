import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedMovie: null, // Başlangıçta seçilen film yok (null)
};

const overViewSlice = createSlice({
  name: 'overView',
  initialState,
  reducers: {
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
    clearSelectedMovie: (state) => {
      state.selectedMovie = null;
    },
  },
});

export const { setSelectedMovie, clearSelectedMovie } = overViewSlice.actions;
export default overViewSlice.reducer;
