import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const BackToHome = () => {
const navigate = useNavigate()
    return (  
    <div
    className="flex  justify-start gap-5 items-center cursor-pointer hover:text-blue-600  bg-black text-white"
    onClick={() => navigate("/ ")}
  >
    <div className="border border-white rounded-full flex justify-center items-center h-8 w-8">
      <FaArrowLeftLong />
    </div>{" "}
    <p>Back To Home</p>
  </div>
  )
}

export default BackToHome
