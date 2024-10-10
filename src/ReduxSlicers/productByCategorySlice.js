import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BaseUrl } from '../enums/apiUrl';
import { ENDPOINTS } from '../enums/endpoints';

export const getAllProdcutByCategory = createAsyncThunk(
  "products/getAllProdcutByCategory",
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BaseUrl}${ENDPOINTS.PRODUCT}`, {
        params: query,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getLastCategory = createAsyncThunk(
  "categories/getLastCategory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BaseUrl}${ENDPOINTS.CATEGORY}/lastcategory`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  products: [],
  categories: [],
  status: "",
  error: null,
};

const productByCategorySlice = createSlice({
  name: 'categoryProduct',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllProdcutByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProdcutByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload.data;
      })
      .addCase(getAllProdcutByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getLastCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getLastCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload.data;
      })
      .addCase(getLastCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productByCategorySlice.reducer;
