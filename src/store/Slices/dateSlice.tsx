import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IState {
  dateFrom: string;
  dateTo: string;
}

const initialState: IState = {
  dateFrom: "",
  dateTo: "",
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDateFrom(state, action: PayloadAction<string>) {
      state.dateFrom = action.payload;
    },
    setDateTo(state, action: PayloadAction<string>) {
      state.dateTo = action.payload;
    },
  },
});

export const dateActions = dateSlice.actions;
export default dateSlice.reducer;
