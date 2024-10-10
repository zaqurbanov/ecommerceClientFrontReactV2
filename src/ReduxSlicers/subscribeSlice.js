import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../enums/apiUrl";
import { ENDPOINTS } from "../enums/endpoints";



const initialState = {
    email:"",
    status:"idle",
    message:null,
    error:null
}

export const createSubs = createAsyncThunk("subscribe/createSub",
    async (email,{rejectWithValue})=>{
            try {
                    const response = await axios.post(`${BaseUrl}${ENDPOINTS.SUBSCRIBE_ENDPOINT}`,{email})
                    if(!response.data.success){
                        throw new Error(response.data.message);
                        
                    }

                    return response.data
            } catch (error) {
                return rejectWithValue(error.response.data.message)
            }


    }
)

 const subscribeSlice = createSlice({
    name:"subscribe",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(createSubs.pending,(state)=>{
            state.status = "loading"
        })
        .addCase(createSubs.fulfilled,(state,action)=>{
                state.status = "succeeded"
                state.message = action.payload.message  
                
               
                            
        })
        .addCase(createSubs.rejected,(state,action)=>{
            state.status = "failed";    
            
            
            state.error = action.payload

        })
    }
 })  


 export const {} = subscribeSlice.actions
 export default subscribeSlice.reducer