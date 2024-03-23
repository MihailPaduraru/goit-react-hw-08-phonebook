import { createSlice } from '@reduxjs/toolkit';

import { addContacts, deleteContacts, fetchContacts } from './operations';

const statusPending = state => {
  state.isLoading = true;
  state.error = null;
};

const statusRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const statusFinally = state => {
  state.isLoading = false;
  state.error = null;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, statusPending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, statusRejected)

      .addCase(addContacts.pending, statusPending)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, statusRejected)

      .addCase(deleteContacts.pending, statusPending)
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContacts.rejected, statusRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
