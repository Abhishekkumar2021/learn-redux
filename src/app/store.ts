import {configureStore} from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import { apiSlice } from '../features/Todo/todoSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;