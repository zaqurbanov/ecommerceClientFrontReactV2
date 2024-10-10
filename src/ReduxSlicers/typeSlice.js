import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BaseUrl } from "../enums/apiUrl";
import { ENDPOINTS } from "../enums/endpoints";



export const getAllType = createAsyncThunk("category/getAllType",
    async(_,{rejectWithValue})=>{
        try {
            const response  = await axios.get(`${BaseUrl}${ENDPOINTS.TYPE}`)
            
            return response.data

        } catch (error) {
            
                return rejectWithValue(error.message)
        }

    }
)







const initialState = {
    type:[],
    typeQuery:[],
    status:'idle',
    error:null,
    showTypeModal:false,

}


export const typeSlice = createSlice({
    name:"type",
    initialState,
    reducers:{
        typeFilter:(state,action)=>{
            const value  = action.payload
          const isExsist =   state.typeQuery.find(item=>item ==value)
          if(isExsist){
              state.typeQuery = state.typeQuery.filter(item=>item!== value)

          }else{

              state.typeQuery =[...state.typeQuery,value]
          }
            
    },
    resetTypeFilter:(state)=>{
        state.typeQuery = [],
        state.status='idle',
            state.error=null,
            state.showTypeModal=false
   
    },
    handleShowTypeModal:(state)=>{
        state.showTypeModal = !state.showTypeModal
        state.createStatus = 'idle'
    }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllType.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(getAllType.fulfilled,(state,action)=>{
            state.status = "succeeded"
            state.type = action.payload.data
        })
        .addCase(getAllType.rejected,(state,action)=>{
            state.error = action.payload
        })
  
     
    
      
    
     
      
       
  
}
})


export const {typeFilter,resetTypeFilter,handleShowTypeModal} = typeSlice.actions
export default typeSlice.reducer