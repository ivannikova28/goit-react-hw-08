import { createSelector, createSlice, nanoid } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./operations";
import { selectContacts } from "./selectors";
import { selectNameFilter } from "../filters/selectors";
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addContact.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteContact.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const visibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filtersContact) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filtersContact.toLowerCase())
    );
  }
);

// export const visibleContacts = state => {
//   const contacts = selectContacts(state);
//   const filtersContact = selectNameFilter(state);
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filtersContact.toLowerCase())
//   );
// }

export const contactReducer = contactsSlice.reducer;
