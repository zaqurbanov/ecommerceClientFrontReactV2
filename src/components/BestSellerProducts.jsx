import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsData } from '../ReduxSlicers/productSlice';
import { addBasket } from '../ReduxSlicers/basketSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { EffectCoverflow, Pagination,Navigation } from 'swiper/modules';


const BestSellerProducts = () => {


  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const status = useSelector(state => state.products.status);
  const errors = useSelector(state => state.products.error);
  const basket = useSelector(state => state.basket.basket);
  const totalProduct = useSelector(state => state.basket.totalProduct);



  const handleAddToCart = (product) => {
    dispatch(addBasket(product._id));
  }


  useEffect(() => {
    dispatch(getAllProductsData());
  }, [dispatch]);
  
  
  return (
    <div className='bg-black p-16 max-md:p-2 relative '>
             <Swiper 
        effect={'coverflow'}
        grabCursor={false}
        slidesPerView= {4}
        spaceBetween={50}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          64: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          scale:1,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{el:'.swiper-pagination',clickable: true}}
        
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper1"
      >

        
        {products?.map(product =>
          <SwiperSlide  key={product._id} className='bg-third rounded-tr-2xl rounded-bl-2xl h-[70vh] min-h-[70vh] border border-blue-900 box-shadow   '>
            <div className='h-[480px]'>
            <ProductCard key={product._id} product={product} handleAddToCart={handleAddToCart}/>

            </div>
          </SwiperSlide>
        )}
       
        </Swiper>
 <div className='swiper-pagination   '></div>
    </div>
  )
}

export default BestSellerProducts;
