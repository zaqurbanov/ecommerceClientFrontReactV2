import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ENDPOINTS } from "../enums/endpoints";
import { BaseUrl } from "../enums/apiUrl";






export const getAllBrand = createAsyncThunk("category/getAllBrand",
    async(_,{rejectWithValue})=>{
        try {
            const response  = await axios.get(`${BaseUrl}${ENDPOINTS.BRAND}`)
            
            return response.data

        } catch (error) {
                return rejectWithValue(error.message)
        }

    }
)






const initialState = {
    brand:[],
    brandQuery:[],
    status:'idle',
    error:null,
    showBrandModal:false,
    updateStatus:'idle',
    updateMessage:null,
    updateError:null,
    createStatus:'idle',
    createMessage:null,
    createError:null,
    deleteStatus:'idle',

    deleteError:null,
    deleteMessage:null
}

export const brandSlice = createSlice({
    name:"brand",
    initialState,
    reducers:{
        brandFilter:(state,action)=>{
                const value  = action.payload
              const isExsist =   state.brandQuery.find(item=>item ==value)
              if(isExsist){
                  state.brandQuery = state.brandQuery.filter(item=>item!== value)

              }else{

                  state.brandQuery =[...state.brandQuery,value]
              }
                
        },
        resetBrandFilter:(state)=>{
            state.brandQuery = []
            state.deleteStatus = 'idle'

        },
        handleShowBrandModal:(state)=>{
            state.showBrandModal = !state.showBrandModal
            state.createStatus = 'idle'
        }
    },
    extraReducers:(builder)=>{
            builder.addCase(getAllBrand.pending,(state)=>{
                state.status = 'loading'
            })
            .addCase(getAllBrand.fulfilled,(state,action)=>{
                state.status = "succeeded"
                state.brand = action.payload.data
            })
            .addCase(getAllBrand.rejected,(state,action)=>{
                state.error = action.payload
            })
            
            
            
            
    }
})


export const {brandFilter,resetBrandFilter,handleShowBrandModal} = brandSlice.actions
export default brandSlice.reducer