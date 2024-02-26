import { createReducer } from "@reduxjs/toolkit";
import { addToken } from "../Auth/auth-actions";

export const token = createReducer("", {
  [addToken]: (_, { payload }) => payload,
});
