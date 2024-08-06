import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


const baseURL = "https://66a3876c44aa637045818c2f.mockapi.io/"
const instanceAxios = axios.create({baseURL})


 export const fetchContacts = createAsyncThunk(
   "contacts/fetchAll",
   async (_, thunkAPI) => {
     try {
       const response = await instanceAxios.get("/contacts");
       return response.data;
     } catch (error) {
       return thunkAPI.rejectWithValue(error.message);
     }
   }
 );

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await instanceAxios.post("/contacts", newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await instanceAxios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);