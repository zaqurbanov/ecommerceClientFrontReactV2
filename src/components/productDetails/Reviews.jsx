import React, { useEffect, useState } from 'react'
import { CiStar } from 'react-icons/ci'
import RatingStar from '../RatingStar'
import SelectRating from './SelectRating'
import { useFormik } from 'formik'
import TestimonialForm from './TestimonialForm'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTestimonial, getTestimonialStats } from '../../ReduxSlicers/testimonialSlice'
import { useParams } from 'react-router-dom'

const Reviews = ({selectedTab,product}) => {
const dispatch = useDispatch() 
const getAllTestimonials = useSelector(state=>state.testimonial.testimonials)
const testimonialStats = useSelector(state=>state.testimonial.testimonialStat)
const testimonialPostStatus = useSelector(state=>state.testimonial.postStatus)
const{id} = useParams()
useEffect(()=>{
  

    dispatch(getTestimonialStats(id))
    dispatch(getAllTestimonial())
  
},[dispatch,product,testimonialPostStatus])




  return (
    <div className={`${selectedTab !== "reviews" ? "hidden" : " "}  flex flex-col gap-10 mt-10`}>

            <div className='flex justify-center items-center flex-col gap-2'>
                <h1 className='capitalize text-xl font-bold'>customer reviews</h1>
                <div className='flex items-center gap-5'>
              <RatingStar rating={5} />
                <div className='h-3 w-24 bg-slate-300'></div>
                <p>{testimonialStats.total5}</p>
                </div>
                <div className='flex items-center gap-5'>
              <RatingStar rating={4} />
                <div className='h-3 w-24 bg-slate-300'></div>
                <p>{testimonialStats.total4}</p>
                </div>

                <div className='flex items-center gap-5'>
              <RatingStar rating={3 } />
                <div className='h-3 w-24 bg-slate-300'></div>
                <p>{testimonialStats.total3}</p>
                </div>

                <div className='flex items-center gap-5'>
              <RatingStar rating={2} />
                <div className='h-3 w-24 bg-slate-300'></div>
                <p>{testimonialStats.total2}</p>
                </div>

                <div className='flex items-center gap-5'>
              <RatingStar rating={1} />
                <div className='h-3 w-24 bg-slate-300'></div>
                <p>{testimonialStats.total1}</p>
                </div>

                <div>
                  <h1 className='font-bold'>Total rating: <span className='text-blue-800'>{testimonialStats.totalTestimonials}</span> </h1>
                  <h1 className='font-bold'>Total rating avarage: <span className='text-blue-800'>{Math.ceil(
                    testimonialStats.totalAvarage 
                  )}</span> </h1>
                </div>
            </div>


            <div>
                
                    {/* <SelectRating handleSelectRating={handleSelectRating} /> */}
                    <TestimonialForm product={product} />

                
            </div>
    </div>
  )
}

export default Reviews
