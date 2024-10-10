import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { decrementBasket, incrementBasket, onchangeInputBasket } from '../ReduxSlicers/basketSlice';

const IncrementOrDecrementOfProduct = ({item}) => {

    const dispatch = useDispatch()
    const handleOnchange = (e, id) => {
        const value = Number(e.target.value);
        dispatch(onchangeInputBasket({ id, quantity: value }));
        
    };
     
  return (
    <div className=" flex justify-center items-center border  p-2 rounded-bl-2xl  hover:rounded-bl-none hover:rounded-tl-2xl
    rounded-tr-2xl hover:rounded-tr-none transition-all">
        <FaPlus
          className="cursor-pointer text-[#838383] "
          onClick={() => dispatch(incrementBasket(item._id))}
        />
        <input
          type="number"
          className="w-10 text-center bg-black text-white"
          min={0}
          value={item.quantity }
          onChange={(e) => handleOnchange(e, item._id)}
        />
        <FaMinus className="cursor-pointer text-[#838383]"onClick={()=>dispatch(decrementBasket(item._id))}  />

      </div>
  )
}

export default IncrementOrDecrementOfProduct
