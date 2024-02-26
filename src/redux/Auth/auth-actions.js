import { createAction } from "@reduxjs/toolkit";

const addToken = createAction("auth/token", (token) => ({
  payload: {
    token: token,
  },
}));

export { addToken };
