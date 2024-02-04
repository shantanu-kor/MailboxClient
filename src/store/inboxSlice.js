import { createSlice } from "@reduxjs/toolkit";

const initialInboxState = { mails: [] };

const inboxSlice = createSlice({
  name: "InboxMails",
  initialState: initialInboxState,
  reducers: {
    setInbox(state, action) {
      state.mails = action.payload;
    },
  },
});

export const inboxActions = inboxSlice.actions;

export default inboxSlice.reducer;
