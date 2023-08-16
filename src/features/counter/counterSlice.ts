import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },
        incrementBy(state, action) {
            state.value += action.payload;
        },
        reset(state) {
            state.value = 0;
        },
        set(state, action) {
            state.value = action.payload;
        }
    }
});

export const { increment, decrement, incrementBy, reset, set } = counterSlice.actions;
export default counterSlice.reducer;