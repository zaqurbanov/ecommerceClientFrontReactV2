
import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../enums/apiUrl";
import { ENDPOINTS } from "../enums/endpoints";


export const sendOrder = createAsyncThunk('basket/sendOrder',
    async (products,{rejectWithValue})=>{
       
        const order = products.map(product=>({
         productId:product._id,
         quantity:product.quantity
        }))
       
       const token  = sessionStorage.getItem('token')
        
            try {
                if(!token){
                   return rejectWithValue("Please sigup or sign in")
                }
               const response = await axios.post(`${BaseUrl}${ENDPOINTS.ORDER_ENDPOINT}`,order,{
                headers:{
                    "Authorization":`Bearer ${token}`,
                    "Content-Type": "application/json"
                  
                }
               })
              
             

             console.log(response);
               return response.data
            } catch (error) {
                console.log(error);
                return rejectWithValue(error.message)
            }
    }
)

const initialState = {

    basket:[],
    totalProduct:Number(0),
    
    allProductPrice:Number(0),
    isActive:false,
    status:'idle',
    error:null,
    message:null
}


const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{
        addBasket:(state,action)=>{
            // action ile  product gonderilir
            const newProduct = action.payload 

            
            // productun var olub olmadigini tapiriq
            const isExistingItem = state.basket.find(item=>item._id ==newProduct._id);
            // basketde bele bir product yoxdursa ordere productun idsini ve miqdarini gonderirik 
             if(!isExistingItem){
                
                state.basket.push({
                    ...newProduct,
                    quantity:1,
                    totalPrice:newProduct.price
                })
                state.allProductPrice+=newProduct.price
             
               
             }  else{
                
                
                // basketde gonderilen productun id sine beraber product varsa 
               // hemin productun miqdarini artiririq
                isExistingItem.quantity+=1
                isExistingItem.totalPrice+=isExistingItem.price
                // butun productlarin qiymetler cemine  productun qiymetini elave edirik
               state.allProductPrice +=newProduct.price
               
               
                
             }
                state.totalProduct += Number(1)
                // state.totalPrice +=newProduct.price
                
                
        },
        showBasket:(state)=>{
            
            state.isActive = !state.isActive
        },
        incrementBasket:(state,action)=>{
            const id = action.payload
           
            const isExistingItem = state.basket.find(item=>item._id ==id);

                
            if(isExistingItem){
                isExistingItem.quantity+=1
                isExistingItem.totalPrice+=isExistingItem.price
                state.allProductPrice+=isExistingItem.price
                state.totalProduct+=1
            }
        },
        decrementBasket:(state,action)=>{
            const id = action.payload
           
            const isExistingItem = state.basket.find(item=>item._id ==id);



            if (isExistingItem) {
                if (isExistingItem.quantity > 1) {
                    isExistingItem.quantity -= 1;

                    isExistingItem.totalPrice -= isExistingItem.price;
                    state.allProductPrice -= isExistingItem.price;
                    state.totalProduct -=1
                } else {
               
                    state.basket = state.basket.filter(item => item._id !== id);
                    state.totalProduct -= 1;
                    state.allProductPrice -= isExistingItem.price;
                }
            }
            if(state.totalProduct<0){
                state.totalProduct = 0
            }

        },
        deleteProduct:(state,action)=>{
            const id = action.payload
           
            const isExistingItem = state.basket.find(item=>item._id ==id);
            if(isExistingItem){
                state.totalProduct -= isExistingItem.quantity
                state.allProductPrice = state.allProductPrice-(isExistingItem.quantity*isExistingItem.price) 
                state.basket = state.basket.filter(item => item._id !== id);
                if(state.totalProduct<0){
                    state.totalProduct = 0
                }
            }
        },
        onchangeInputBasket:(state,action)=>{
            const { id, quantity } = action.payload;  
            const isExistingItem = state.basket.find(item => item._id === id); 
            if (isExistingItem) {  
                if(quantity<1){
                    state.basket = state.basket.filter(item => item._id !== id);
                    state.order = state.order.filter(item=>item.productId !== id)
                    state.totalProduct -= 1;
                    state.allProductPrice -= isExistingItem.price;
                }
                const differenceQuantity = quantity - isExistingItem.quantity;  
                isExistingItem.quantity = quantity; 
                isExistingItem.totalPrice = isExistingItem.price * quantity;  
                
                state.totalProduct += differenceQuantity; 
                state.allProductPrice += differenceQuantity * isExistingItem.price;  
            }
        },
        clearBasket:(state)=>{
                state.basket = [];
                state.allProductPrice = 0
                state.isActive=false
                state.totalProduct = 0
        },
        isActiveChange:(state)=>{
            state.isActive = false
        }

    },

    extraReducers:(builder)=>{
        builder.addCase(sendOrder.pending,(state)=>{
            state.status = "loading"
        })
        .addCase(sendOrder.fulfilled,(state,action)=>{
            state.status = "succeeded"
            state.message = action.payload.message || "complated"
            state.basket= []
            state.isActive = false
            state.totalProduct = 0
            state.allProductPrice = 0
        })
        .addCase(sendOrder.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.payload
            state.message = action.payload
            
        })
    },
    

})


export const {addBasket,showBasket,incrementBasket,onchangeInputBasket,decrementBasket,deleteProduct,clearBasket,isActiveChange} = basketSlice.actions;

export default basketSlice.reducer