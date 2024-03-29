import { createSlice } from '@reduxjs/toolkit';

import { addContact, fetchContacts, removeContact } from './operations';

const statusPending = state => {
  state.isLoading = true;
  state.error = null;
};

const statusRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, statusPending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, statusRejected)

      .addCase(addContact.pending, statusPending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, statusRejected)

      .addCase(removeContact.pending, statusPending)
      .addCase(removeContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(removeContact.rejected, statusRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
