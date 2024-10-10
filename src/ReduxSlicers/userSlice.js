import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../enums/apiUrl";
import { ENDPOINTS } from "../enums/endpoints";

const initialState = {
  user: "",
  status: "idle",
  isActive: false,
  error: null,
  isUpload:"idle"
};

export const getUserById = createAsyncThunk('user/getUserById',
  async (_, { rejectWithValue }) => {
    const token = sessionStorage.getItem('token'); // Tokeni sessionStorage-dan götürürük
    try {
      if (!token) {
        throw new Error('Token not found');
      }

      const response = await axios.get(`${BaseUrl}${ENDPOINTS.USER_PROFILE}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if(!response.data.success){
        throw new Error("Access denied");
        
    }
    return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//!  Update user 
export const updateUser = createAsyncThunk('user/updateUser',
    async(data,{rejectWithValue})=>{
        try {
          
            const response = await axios.put(`${BaseUrl}${ENDPOINTS.USER_UPDATE}`,data,{
                headers:{
                    "Content-Type":"multipart/form-data"
                }
                
            })
            

            return response.data
        } catch (error) {
            
            return rejectWithValue(error.message)
        }
    }
)

export const deleteImage = createAsyncThunk('users/deleteImage',
    async(_,{rejectWithValue})=>{
        try {
                const response = await axios.delete(`${BaseUrl}${ENDPOINTS.USER_REMOVE_IMAGE}`)
                
                return response.data
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data.message);
        }

    }
)
export const loginUser = createAsyncThunk('users/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BaseUrl}${ENDPOINTS.LOGIN_ENDPOINT}`, {
        username: userData.username,
        password: userData.password
      });

      if (!response.data.success) { 
        throw new Error(response.data.message);
      }

      // Tokeni sessionStorage-da saxlayırıq
      
      sessionStorage.setItem('token', response.data.data);
      return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOutUser: (state) => {
      state.isActive = false;
      sessionStorage.clear(); 
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.status = "loading";
    })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.data;
        state.isActive = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getUserById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.data;
        state.isActive = true; // Əgər token varsa, istifadəçi aktivdir
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.isActive = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.data;
        state.isUpload = "succeeded"
        
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.isUpload = 'failed'
      })
      .addCase(deleteImage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteImage.fulfilled, (state, action) => {
        state.status = "succeeded";
       
        state.isUpload = "succeeded"
        
      })
      .addCase(deleteImage.rejected, (state, action) => {
        state.status = "failed";
        
        state.error = action.payload;
        state.isUpload = 'failed'
      });
      
  }
});

export const { logOutUser } = userSlice.actions;
export default userSlice.reducer;
