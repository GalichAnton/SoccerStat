import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IState {
  searchTerm: string;
}

const initialState: IState = {
  searchTerm: "",
};

const searchSlice = createSlice({
  name: "competitions",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
