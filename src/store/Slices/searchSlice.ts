import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IState {
  filter: string;
}

const initialState: IState = {
  filter: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
