import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import React from 'react';
import storage from 'redux-persist/lib/storage'; // Default storage (localStorage for web)
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// Define the initial state
interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

// Create a slice
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Configure Redux Persist
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, counterSlice.reducer);

// Create the store
const store = configureStore({
    reducer: {
        counter: persistedReducer,
    },
});

// Create the persistor
const persistor = persistStore(store);

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create a Redux provider component
export const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
};