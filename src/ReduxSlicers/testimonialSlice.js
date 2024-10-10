import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BaseUrl } from "../enums/apiUrl"
import { ENDPOINTS } from "../enums/endpoints"

export const getTestimonialStats = createAsyncThunk('testimonial/getTestimonialStats',
    async(id,{rejectWithValue})=>{
        console.log(id);
        try {
            const response = await axios.get(`${BaseUrl}${ENDPOINTS.TESTIMONIAL_ENDPOINT}${ENDPOINTS.TESTIMONIAL_STATS}/${id}`)
            return response.data
            
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message || error.message)
        }
    }
)

export const getAllTestimonial = createAsyncThunk('testimonial/getAllTestimonial',
    async (query, { rejectWithValue }) => {

        try {
            const response = await axios.get(`${BaseUrl}${ENDPOINTS.TESTIMONIAL_ENDPOINT}`,
                query ? {
                    params: { ...query }
                } : ""
            )

            return response.data

        } catch (error) {
            return rejectWithValue(error.response.data.message || error.message)
        }
    }
)

export const addTestimonial = createAsyncThunk('testimonial/addTestimonial',
    async (data, { rejectWithValue }) => {
        
       
        try {
            const response = await axios.post(`${BaseUrl}${ENDPOINTS.TESTIMONIAL_ENDPOINT}`,data)

            return response.data
            
        } catch (error) {
            
         console.log(error);
            return rejectWithValue(error.response.data.message||error.message)
        }
    }
)

const initialState = {
    testimonials: [],
    testimonialStat:{},
    status: 'idle',
    getStatus:"idle",
    getStatStatus:"idle",
    postStatus:"idle",
    error: null
}

const testimonialSlice = createSlice({
    name: 'testimonial',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllTestimonial.pending, (state) => {
            state.status = "loading"
        })
            .addCase(getAllTestimonial.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.testimonials = action.payload.data
            })
            .addCase(getAllTestimonial.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.payload
            })
            .addCase(addTestimonial.pending, (state) => {
                state.postStatus = "loading"
            })
                .addCase(addTestimonial.fulfilled, (state, action) => {
                    state.postStatus = "succeeded"
                    state.testimonials = action.payload.data
                })
                .addCase(addTestimonial.rejected, (state, action) => {
                    state.postStatus = "failed"
                    state.error = action.payload
                })
                

                .addCase(getTestimonialStats.pending,(state)=>{
                    state.status= "loading"
                    
                })
                .addCase(getTestimonialStats.fulfilled,(state,action)=>{
                    state.status = "succeeded"
                    state.testimonialStat = action.payload.data
                })
                .addCase(getTestimonialStats.rejected,(state,action)=>{
                    state.status = "failed"
                    state.error = action.payload
                })
    }
})





export const { } = testimonialSlice.actions;

export default testimonialSlice.reducer;
