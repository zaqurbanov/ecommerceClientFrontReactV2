import React from 'react'
import SectionName from './SectionName'
import sectionImg  from '../assets/subscriber-img.webp'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { createSubs } from '../ReduxSlicers/subscribeSlice'
import { subsSchema } from '../yupSchemas/SubsSchema'
const Subscribe = () => {
const dispatch = useDispatch()

    const formik = useFormik({
        initialValues:{
            email:""
        },
        validationSchema:subsSchema,
        onSubmit:(values)=>{
            dispatch(createSubs(values.email))
            resetForm()
        }
    })



    const {errors,values,handleChange,resetForm,handleSubmit} = formik
  return (
    <div className='p-16 max-md:p-2'>

        <div className='bg-third custom-border-radius px-5 py-16 border border-blue-700 flex justify-between items-start   '>
  <div className='w-[40%] max-md:w-[100%] flex flex-col gap-5 '>
      <SectionName  name={"Subscribe"}/>
        <h1 className='font-bold capitalize text-3xl'>
        Subscribe newsletter <br /> and <span className='linear-text'>
             get -20% off
            </span>
        </h1>

    <p className='text-muted text-[12px]'>Almost three-quarters of dedicated PC gamers say their main motivation to upgrade is improving gaming experiences.</p>


    <form onSubmit={handleSubmit}  className=' flex max-md:flex-wrap max-md:justify-center max-md:gap-3 border '>

        <input type="email" className='px-4 py-2 border  rounded-bl-lg max-md:w-full  ' placeholder='Enter Email Adress...' name='email' value={values.email} onChange={handleChange} />
        <button className='bgLinear text-white px-4 py-2 whitespace-nowrap rounded-tr-lg text-sm font-bold max-md:w-full' type='submit'>SEND MESSAGE</button>
    </form>
        </div>

        <div className='w-[30%]  relative h-full   inline-block max-md:hidden'>
            <img src={sectionImg} alt="" className='    absolute top-[-85px] min-h-[350px] ' />
        </div>

        </div>
      


    </div>
  )
}

export default Subscribe
