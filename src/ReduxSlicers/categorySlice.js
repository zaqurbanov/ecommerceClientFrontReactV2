import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ENDPOINTS } from "../enums/endpoints";
import { BaseUrl } from "../enums/apiUrl";

export const getAllCategory = createAsyncThunk("category/getAllCategory",
    async(_,{rejectWithValue})=>{
        try {
            const response  = await axios.get(`${BaseUrl}${ENDPOINTS.CATEGORY}`)
            
            return response.data

        } catch (error) {
            
                return rejectWithValue(error.message)
        }

    }
)





const initialState = {
    category:[],
    categoryQuery:[],
    status:'idle',
    error:null,
    showCategoryModal:false,

    deleteError:null,
    deleteMessage:null
    
}
export const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{
        categoryFilter:(state,action)=>{
                const value  = action.payload
              const isExsist =   state.categoryQuery.find(item=>item ==value)
              if(isExsist){
                  state.categoryQuery = state.categoryQuery.filter(item=>item!== value)

              }else{

                  state.categoryQuery =[...state.categoryQuery,value]
              }
                
        },
        resetCategoryFilter:(state)=>{
            state.categoryQuery = []
        },
        handleShowCategoryModal:(state)=>{
            state.showCategoryModal = !state.showCategoryModal
        }
    },
    extraReducers:(builder)=>{
            builder.addCase(getAllCategory.pending,(state)=>{
                state.status = 'loading'
            })
            .addCase(getAllCategory.fulfilled,(state,action)=>{
                state.status = "succeeded"
                state.category = action.payload.data
            })
            .addCase(getAllCategory.rejected,(state,action)=>{
                state.error = action.payload
            })
       
    }
})


export const {categoryFilter,resetCategoryFilter,handleShowCategoryModal} = categorySlice.actions
export default categorySlice.reducer