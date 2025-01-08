import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  countryContinent: string;  
}

const initialState: FilterState = {
  countryContinent: '', 
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCountryContinent(state, action: PayloadAction<string>) {
      state.countryContinent = action.payload;
    },
  },
});

export const { setCountryContinent } = filterSlice.actions;

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;