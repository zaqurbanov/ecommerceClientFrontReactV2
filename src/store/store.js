


import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../ReduxSlicers/productSlice.js';
import basketReducer from '../ReduxSlicers/basketSlice.js';
import productByCategoryReducer from '../ReduxSlicers/productByCategorySlice.js'
import userReducer from "../ReduxSlicers/userSlice.js"
import subsReducer from "../ReduxSlicers/subscribeSlice.js"
import testimonialSlice from "../ReduxSlicers/testimonialSlice.js"
import brandReducer from "../ReduxSlicers/brandSlicer.js"
import categoryReducer from "../ReduxSlicers/categorySlice.js"
import sizeReducer from "../ReduxSlicers/sizeSlice.js"
import typeReducer from "../ReduxSlicers/typeSlice.js"

export const store = configureStore({
  reducer: {
    products: productReducer,
    basket:basketReducer,
    categoryProduct:productByCategoryReducer,
    user:userReducer,
    subscribe:subsReducer,
    testimonial:testimonialSlice,
    brand:brandReducer,
    category:categoryReducer,
    size:sizeReducer,
    type:typeReducer
    

  },
});
