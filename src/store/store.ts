import { configureStore } from '@reduxjs/toolkit';

import bookReducer from './bookSlice'

const store = configureStore({
    reducer: {
        testSlice: bookReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;