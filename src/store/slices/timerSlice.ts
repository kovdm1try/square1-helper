import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { getScramble } from '@/lib/timerUtils';

interface TimerState {
  scramble: string;
  prevScramble: string;
  waitScrambleLoad: boolean;
}

const initialState: TimerState = {
  scramble: '',
  prevScramble: '',
  waitScrambleLoad: false
};

export const fetchScramble = createAsyncThunk('timer/fetchScramble', async () => {
  return await getScramble();
});

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setScramble(state, action: PayloadAction<string>) {
      if (state.scramble) state.prevScramble = state.scramble;

      state.prevScramble = state.scramble;
      state.scramble = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchScramble.pending, (state) => {
        state.waitScrambleLoad = true;
      })
      .addCase(fetchScramble.fulfilled, (state, action) => {
        if (state.scramble) state.prevScramble = state.scramble;

        state.prevScramble = state.scramble;
        state.scramble = action.payload;
        state.waitScrambleLoad = false;
      })
      .addCase(fetchScramble.rejected, (state) => {
        state.waitScrambleLoad = false;
        console.error('Error while fetching scramble rejected');
      });
  }
});

export const { setScramble } = timerSlice.actions;
export default timerSlice.reducer;
