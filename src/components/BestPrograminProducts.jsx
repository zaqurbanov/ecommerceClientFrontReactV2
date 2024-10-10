import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'swiper/css';
import 'swiper/css/pagination';



import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCart2 from './ProductCart2';
import { getAllProductsData } from '../ReduxSlicers/productSlice';
const BestPrograminProducts = () => {
const dispatch = useDispatch()
  const allProducts = useSelector(state=>state.products.products)  

const getchairProduct = allProducts.filter(product=>product.type.slug=="chairs")
useEffect(()=>{
 
dispatch(getAllProductsData({type:"chairs"}))
},[])


  return (
    <div className='p-16 max-md:p-4 space-y-8'>
      <div>
      <h1 className="text-black text-3xl font-bold ">
            Best
            <span className="linear-text"> Pro Gaming</span>
            <br />
            Products
          </h1>
      </div>

      <div>

      </div>

      <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true} 
        breakpoints={{
            
            0:{
                slidesPerView: 1,
                spaceBetween: 20,
            },
            400:{
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
         
          }}
        
        pagination={{
          clickable: true,
        }}
      
        className="mySwiper"
      >

            {getchairProduct && getchairProduct.map(product=>

            <SwiperSlide  className="w-full bg-third border border-blue-600 custom-border-radius"
            key={product._id}>
              <div className='h-[480px]'>
                    <ProductCart2 product={product} />

              </div>
            </SwiperSlide>


            )}
    </Swiper>



      </div>
    </div>
  )
}

export default BestPrograminProducts
