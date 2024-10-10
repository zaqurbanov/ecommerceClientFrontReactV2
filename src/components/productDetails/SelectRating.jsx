import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const SelectRating = ({handleSelectRating}) => {

    const[hover,setHover]=useState()
    



  return (
    <div>
        <div className='flex'>

        {[...Array(5)].map((star,index)=>
        <FaStar className={`text-yellow-500 cursor-pointer ${index<hover ? "text-yellow-600":"text-slate-600"}`} key={index+1}   onMouseEnter={()=>setHover(index+1)} onClick={()=>handleSelectRating(index+1)} />
        
        
        )}

        </div>
    </div>
  )
}

export default SelectRating
