import React, { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
    decrementBasket,
  deleteProduct,
  incrementBasket,
  isActiveChange,
  onchangeInputBasket,
  sendOrder,
  showBasket,
} from "../ReduxSlicers/basketSlice";
import { AnimatePresence, motion } from "framer-motion";
import { FaMinus, FaPlus } from "react-icons/fa";
import Product from "../pages/Product";
import { CiTrash } from "react-icons/ci";
import { HashLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import IncrementOrDecrementOfProduct from "./IncrementOrDecrementOfProduct";

const Basket = () => {
  const basketProduct = useSelector((state) => state.basket.basket);
  const isActive = useSelector((state) => state.basket.isActive);
  const allProductPrice = useSelector((state) => state.basket.allProductPrice);
  const totalProduct = useSelector(state=>state.basket.totalProduct)
  const orderStatus = useSelector(state=>state.basket.status);
 
const navigate = useNavigate()



  const dispatch = useDispatch();
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);
  const closeBasket = (e) => {
    if (e.target.classList.contains("BASKETWRAPPER")) {
      dispatch(showBasket());
    }
  };

  const handleSendOrder = ()=>{
    const token  = sessionStorage.getItem('token')
    if(!token){
      dispatch(isActiveChange())
      navigate('/login')
    
    }else{

      dispatch(sendOrder(basketProduct))
    }
  }


  return (
    <motion.div
      className={`fixed BASKETWRAPPER bg-bgRgba h-full z-10 flex  transition-all duration-200 justify-end  w-full right-0 top-0     `}
      onClick={(e) => closeBasket(e)}
      initial={{ x: "100%" }}
      animate={{ x: "0" }}
      exit={{ x: "100%" }}
      transition={{ type: "just", duration: 0.3 }}
    >

      <div>
        <div className="bg-white h-full w-80 relative  p-3 flex flex-col gap-5">
          <div className="flex justify-between items-center ">
            <h1 className="font-bold text-xl">Your Cart</h1>
            <button
              className="bgLinear text-white p-1 rounded-full"
              onClick={() => dispatch(showBasket())}
            >
              <IoMdClose />
            </button>
          </div>

          <div className="w-[full] h-1 left-0 rounded-md bgLinear mt-5"></div>

          <div>
            <p>
              Your Are <span>357.00$</span> Away from Free Shipping{" "}
            </p>
          </div>

          <div className="flex flex-col gap-3 -scroll-ml-3.5  overflow-y-auto" style={{ maxHeight: 'calc(100vh - 300px)' }}>
            {basketProduct &&
              basketProduct.map((item) => (
                <div className="flex gap-3 py-3  border-b" key={item._id} >
                  <div className="border border-blue-950  w-20 h-32  p-3 rounded-bl-2xl  hover:rounded-bl-none hover:rounded-tl-2xl
                  rounded-tr-2xl hover:rounded-tr-none transition-all
                  flex justify-center items-center     ">
                    <img
                      src={item.primaryImage}
                      alt=""
                      className="object-cover aspect-square "
                    />
                  </div>

                  <div className="flex flex-col justify-start items-start gap-2 ">
                    <h2>{item.name}</h2>
                    <p>{item.totalPrice} $</p>
                <IncrementOrDecrementOfProduct item={item} />
                  </div>
                  <CiTrash className="cursor-pointer text-2xl text-red-700 hover:scale-105" onClick={()=>dispatch(deleteProduct(item._id))} />


                </div>
              ))}
            
          </div>

          <div className="realtive bg-white mt-auto w-full border border-t-slate-700 left-0 p-3 py-6 shadow-[0_0_8px_#0000004d]">

   <div className="flex justify-between items-center">
            <div>
                <h3 className="font-bold">Total Item</h3>
                <p>{totalProduct}</p>
            </div>
            <div>
                <h3 className="font-bold">SubTotal</h3>
                <p>{allProductPrice}$</p>
            </div>

          </div>


              <div className="flex flex-wrap mt-4">
                <button className="bgLinear flex-auto text-white p-2 hover:opacity-95 transition-all" >VIEW CART</button>
                <button className="bg-black flex-auto  hover:bg-blue-600 transition-all text-white p-2"  onClick={()=>handleSendOrder()}>CHECK OUT</button>
              </div>
          </div>
       
        </div>
      </div>
    </motion.div>
  );
};

export default Basket;
