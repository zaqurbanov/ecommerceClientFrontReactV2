import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { getAllProductsData, handleshowFilter } from "../ReduxSlicers/productSlice";
import { resetBrandFilter } from "../ReduxSlicers/brandSlicer";
import { resetCategoryFilter } from "../ReduxSlicers/categorySlice";
import { resetSizeFilter } from "../ReduxSlicers/sizeSlice";
import { resetTypeFilter } from "../ReduxSlicers/typeSlice";
import FilterSide from "../components/FIlterSide";
import ProductCard from "../components/ProductCard";
import { GrClose } from "react-icons/gr";



const Product = () => {
  const products = useSelector((state) => state.products.products);
  console.log(products);
  const status = useSelector((state) => state.products.status);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const addModalFormShow =useSelector(state=>state.products.productModalShow)
  const showFilter = useSelector(state=>state.products.showFilter)
  useEffect(() => {
    dispatch(getAllProductsData());
    
  }, []);
  const handleResetFilter = ()=>{
    dispatch(resetBrandFilter())
    dispatch(resetCategoryFilter())
    dispatch(resetSizeFilter())
    dispatch(resetTypeFilter())
  }

  const handleModalFormShow= ()=>{
    dispatch(handleShowProduct())
  }
  
  return (
    <div>

   

      
      
      
      <div className="container mx-auto p-4 mt-24">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">


            {/* filter Hissesi */}
 
 
            <div className="col-span-1  max-md:col-span-5  bg-white  shadow-lg rounded-lg ">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold mb-4 cursor-pointer"  onClick={()=>dispatch(handleshowFilter())}>Filters</h2>
                <button onClick={()=>handleResetFilter()} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Reset</button>

            </div>
            
             <div className={ `max-md:text-[10px] ${showFilter ? " left-0  top-0 ":"left-[-100%]"}  z-50 max-md:w-2/3 h-auto p-4  min-h-full max-md:absolute  max-md:bg-white shadow-lg`  }>
                <div className="ml-auto font-bold  border w-fit p-3 text-xl shadow-2xl rounded-full border-blue-700  cursor-pointer hidden max-md:flex" onClick={()=>dispatch(handleshowFilter())}>
              <GrClose className="" />

                </div>

                <FilterSide />

              </div>
            
            
             
            </div>
              <div className="col-span-3  flex flex-wrap justify-between gap-4 p-3 ">
                {products && products.map((product)=>
                <div key={product._id } className="w-[30%] h-[500px] max-sm:h-auto max-md:w-[45%] max-sm:w-[100%]   bgLinear shadow-2xl rounded-lg ">
               
                  <ProductCard product={product}/>


                </div>
                
                )}
                
              </div>
        </div>
        

       
      </div>
      
    <Outlet/> 
    </div>
    
  );
};

export default Product;
