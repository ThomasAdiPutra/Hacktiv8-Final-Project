/* eslint-disable no-param-reassign */
import { configureStore, createSlice } from '@reduxjs/toolkit';

const showAdsSlice = createSlice({
  name: 'showAds',
  initialState: {
    showAds: true,
  },
  reducers: {
    toggle(state) {
      state.showAds = !state.showAds;
    },
  },
});

const store = configureStore({
  reducer: {
    showAds: showAdsSlice.reducer,
  },
});

export default store;
export const { toggle } = showAdsSlice.actions;
