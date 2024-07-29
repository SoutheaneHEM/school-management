import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: "toggle",
  initialState: { value: false },
  reducers: {
    setToggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setToggle } = toggleSlice.actions;

export default toggleSlice.reducer;
