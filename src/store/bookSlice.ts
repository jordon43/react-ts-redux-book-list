import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TestState = {
    isTestStarted: boolean;
    isTestFinished: boolean;
    sentences: string;
}

const initialState: TestState = {
    isTestStarted: false,
    isTestFinished: false,
    sentences: '4',
};

const bookSlice = createSlice({
    name: 'bookSlice',
    initialState,
    reducers: {
        setIsTestStarted(state, action: PayloadAction<boolean>) {
            state.isTestStarted = action.payload;
        },
        setIsTestFinished(state, action: PayloadAction<boolean>) {
            state.isTestFinished = action.payload;
        },
        setSentences(state, action: PayloadAction<string>) {
            state.sentences = action.payload;
        },
        resetTestState(state) {
            state.isTestStarted = false;
            state.isTestFinished = false;
            state.sentences = '4';
        }
    }
});

export const {
    setIsTestStarted,
    setIsTestFinished,
    setSentences,
    resetTestState
} = bookSlice.actions;

export default bookSlice.reducer;