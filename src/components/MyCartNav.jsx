import React from 'react'
import { BsBasket3 } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { showBasket } from '../ReduxSlicers/basketSlice'

const MyCartNav = () => {
  const dispatch = useDispatch()
  const totalProduct = useSelector(state=>state.basket.totalProduct)
  const allProductPrice = useSelector(state=>state.basket.allProductPrice)
  const isActive = useSelector(state=>state.basket.isActive)
  return (
    <div className='flex items-center gap-3 cursor-pointer' onClick={()=>dispatch(showBasket())}>
        <div>
          <h5 className='text-sm'>My Cart</h5>
            <h4 className='text-sm'>{allProductPrice}$</h4>
            </div>
            <div className='relative '>
            <BsBasket3  />
              <span className='absolute top-[-15px] right-[-3px]'>{totalProduct}</span>
            </div>
    </div>
  )
}

export default MyCartNav
