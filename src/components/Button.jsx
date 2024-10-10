import React from 'react'
import { useDispatch } from 'react-redux'
import { addBasket } from '../ReduxSlicers/basketSlice'

const Button = ({text,product}) => {
  const dispatch = useDispatch()

  const handleAddToCart =(product)=>{
    dispatch(addBasket(product))
 }
  return (
    <button onClick={()=>handleAddToCart(product)} className="bgLinear px-2 py-1 rounded-bl-lg rounded-tr-lg hover:rounded-bl-none hover:rounded-tl-lg hover:rounded-tr-none hover:rounded-br-lg transition-all text-white font-semibold">Add To Card</button> 
  )
}

export default Button
