import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import navigationReducer from './slices/navigationSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    navigation: navigationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
