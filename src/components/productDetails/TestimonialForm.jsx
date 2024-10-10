import React, { useEffect, useState } from 'react'
import SelectRating from './SelectRating'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { addTestimonial } from '../../ReduxSlicers/testimonialSlice'
import { testimonialSchema } from '../../yupSchemas/TestimonialSchema'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const TestimonialForm = ({product}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [selectRating,setSelectRating] = useState(1)
    const testimonalError = useSelector(state=>state.testimonial.error)
    const postTestimonialStatus = useSelector(state=>state.testimonial.postStatus)

    const handleSelectRating = (ratingValue)=>{
      setSelectRating(prev=>prev =ratingValue)
        formik.setFieldValue('rating',Number(ratingValue))
    }

    useEffect(()=>{
        formik.setFieldValue("productId",product._id)
    },[])

    useEffect(()=>{

        if(postTestimonialStatus =="succeeded"){

              Swal.fire({
                title:"successfullyfdsfsdf",
                icon:"success"                
        })
        }
      
},[postTestimonialStatus])
  const formik = useFormik({
    initialValues:{
      rating:1,
      title:"",
      comment:"",
      productId:""
    },

validationSchema:testimonialSchema,

onSubmit:(values)=>{
    const token = sessionStorage.getItem('token')
    if(!token){
        Swal.fire({
            title:"please Signup or Sign in",
            icon:"info"
        })

        return navigate('/login')
    }
    dispatch(addTestimonial({...values,productId:product._id}))

    resetForm()
}
  })


  const {values,errors,handleSubmit,handleChange,resetForm} = formik
  
  if(testimonalError){
    Swal.fire({
        title:testimonalError,
        icon:"error"
    })
  }
  return (
    <div>
        
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">

  </div>
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Testimonial</h2>
    <p className="mt-2 text-lg leading-8 text-gray-600">Add new testimonial and comment</p>
  </div>


  <form action="#" onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
    <div className='flex flex-col justify-center items-center'>

    <h2 className='font-semibold '>Select rating</h2>

 <SelectRating handleSelectRating={handleSelectRating} />
    </div>

    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
  
 
     
      <div className="sm:col-span-2">
        <label htmlFor="title" className="block text-sm font-semibold leading-6 text-gray-900">Title</label>
        {errors.title && <p className='text-[10px] text-red-500'>{errors.title}</p> }
        <div className="mt-2.5">
          <input type="title" name="title" id="title"  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={values.title} onChange={handleChange} />
        </div>
      </div>
 
      <div className="sm:col-span-2">
        <label htmlFor="comment" className="block text-sm font-semibold leading-6 text-gray-900">Comment</label>
        {errors.comment && <p className='text-[10px] text-red-500'>{errors.comment}</p> }
        <div className="mt-2.5">
          <textarea name="comment" id="comment" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} 
          value={values.comment}></textarea>
        </div>
      </div>
     
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's send</button>
    </div>
  </form>
</div>
    </div>
  )
}

export default TestimonialForm
