import { createSlice } from "@reduxjs/toolkit";

const initialInboxState = { mails: [] };

const sentSlice = createSlice({
  name: "SentMails",
  initialState: initialInboxState,
  reducers: {
    setSent(state, action) {
      state.mails = action.payload;
    },
  },
});

export const sentActions = sentSlice.actions;

export default sentSlice.reducer;
