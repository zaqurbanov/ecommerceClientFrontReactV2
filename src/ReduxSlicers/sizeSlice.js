import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../enums/apiUrl";
import { ENDPOINTS } from "../enums/endpoints";

export const getAllSize = createAsyncThunk("size/getAllSize",
    async(_,{rejectWithValue})=>{
        try {
            const response  = await axios.get(`${BaseUrl}${ENDPOINTS.SIZE}`)
            
            return response.data

        } catch (error) {
            console.log(error);
                return rejectWithValue(error.message)
        }

    }
)




const initialState = {
    size:[],
    sizeQuery:[],
    status:'idle',
    error:null,
    showSizeModal:false,

}
export const sizeSlice = createSlice({
    name:"size",
    initialState,
    reducers:{
        sizeFilter:(state,action)=>{
                const value  = action.payload
              const isExsist =   state.sizeQuery.find(item=>item ==value)
              if(isExsist){
                  state.sizeQuery = state.sizeQuery.filter(item=>item!== value)

              }else{

                  state.sizeQuery =[...state.sizeQuery,value]
              }
                
        },
        resetSizeFilter:(state)=>{
            state.sizeQuery = []
            state.status='idle',
            state.error=null,
            state.showSizeModal=false
        
           

        },
        handleShowSizeModal:(state)=>{
            state.showSizeModal = !state.showSizeModal
            state.createStatus = 'idle'
        }
    },
    extraReducers:(builder)=>{
            builder.addCase(getAllSize.pending,(state)=>{
                state.status = 'loading'
            })
            .addCase(getAllSize.fulfilled,(state,action)=>{
                state.status = "succeeded"
                state.size = action.payload.data
            })
            .addCase(getAllSize.rejected,(state,action)=>{
                state.error = action.payload
            })
  
     
      
    }
})


export const {sizeFilter,resetSizeFilter,handleShowSizeModal} = sizeSlice.actions
export default sizeSlice.reducer