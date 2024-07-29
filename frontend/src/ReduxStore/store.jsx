import { configureStore } from "@reduxjs/toolkit";
import ToggleSlice from "../ReduxSlice/Toggle.Slice";

export const store = configureStore({
  reducer: {
    // code here
    toggle: ToggleSlice,
  },
});
