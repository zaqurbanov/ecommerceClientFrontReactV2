import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BaseUrl } from '../enums/apiUrl';
import { ENDPOINTS } from '../enums/endpoints';

export const getAllProductsData = createAsyncThunk("products/getAllProductsData",
    async (query,{rejectWithValue})=>{
        try {
            console.log(query);
            const response  = await axios.get(`${BaseUrl}${ENDPOINTS.PRODUCT}`,
                
                query?{
                  params:{...query} 
            }:""
                

            )
           
            
            return response.data
             
        } catch (error) {
                return rejectWithValue(error.message)
        }
    }
)

export const getAllCategories = createAsyncThunk("categories/getAllCategories",
    async(_,{rejectWithValue})=>{
        try {
            const response = await axios.get(`${BaseUrl}${ENDPOINTS.CATEGORY}`)

            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState = {
    products: [],
    categories:[],
    status:'idle',
    error:null,
    showFilter:false
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        handleshowFilter:(state)=>{
            state.showFilter = !state.showFilter
        },
    },
    extraReducers:(builder)=>{

        builder.addCase(getAllProductsData.pending,(state)=>{
            state.status = "loading"
        })
        .addCase(getAllProductsData.fulfilled,(state,action)=>{
            state.status = 'succeeded';
           
            state.products = action.payload.data

        })
        .addCase(getAllProductsData.rejected,(state,action)=>{
            state.status = "failed";
           
            state.error = action.payload
        
        })


        builder
        .addCase(getAllCategories.pending,(state)=>{
            state.status = "loading"
        })
        .addCase(getAllCategories.fulfilled,(state,action)=>{
            state.status = "succeeded"
            state.categories = action.payload.data
        })
        .addCase(getAllCategories.rejected,(state,action)=>{
                state.status = "failed"
                state.error = action.payload
        })
    }



});

export const {handleshowFilter } = productSlice.actions;

export default productSlice.reducer;
