export const selectContacts = (state) => state.contacts.items;
 export const state = (state) => state;

export const selectLoading = (state) => state.contacts.isLoading;
export const selectError = (state) =>  state.contacts.error;