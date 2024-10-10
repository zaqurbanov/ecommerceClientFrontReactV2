import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useFormik } from 'formik'
import { deleteImage, getUserById, updateUser } from '../ReduxSlicers/userSlice'
import { CircleLoader } from 'react-spinners'
import Swal from 'sweetalert2'

const UserProfile = () => {
    const userStatus = useSelector(state=>state.user.status)
    const userDetail = useSelector(state=>state.user.user)
    const isUpload = useSelector(state=>state.user.isUpload)
    const userError = useSelector(state=>state.user.error)
    
    const [imagePrev,setImagePrev] = useState(null)
const dispatch = useDispatch()
useEffect(()=>{
dispatch(getUserById())

},[dispatch,isUpload])




// isUpload =="failed" && Swal.fire({
//     icon:"error",
//     title:"Uploaded unsuccessfully"
// })
useEffect(()=>{
isUpload =="succeeded"&& Swal.fire({
    icon:"success",
    title:"Uploaded successfully"
})
},[isUpload=="succeeded"])




useEffect(()=>{
userError && Swal.fire({
    icon:"error",
    text:userError
})


},[userError])

    const formik = useFormik({
        initialValues:{

           
            name:"",
            username:"",
            email:"",
            image:null
        },
        onSubmit:(values)=>{
            const formData = new FormData()
            formData.append("name",values.name)
            formData.append('username',values.username)
            formData.append('email',values.email)
            formData.append('image',values.image)

          
            dispatch(updateUser(formData))
        }
    })

    
    const {values,handleChange,handleReset,handleSubmit,errors} = formik
    useEffect(()=>{
        if(userDetail){
            formik.setValues({
                name:userDetail.name || "",
                username:userDetail.username||"",
                email:userDetail.email||"",
                
            })
        }
    },[userDetail])


    const handleImageChange =(e)=>{
        const file = e.target.files[0]
        formik.setFieldValue('image',file)
        
        if(file){
            const prevUrl = URL.createObjectURL(file)
            setImagePrev(prevUrl)
        }
    }

    
    return (
    <>  
     { userStatus =="loading"&& <div className="absolute  w-screen h-screen top-0 left-0 backdrop-blur-sm  flex justify-center items-center z-50">
          <CircleLoader className="" color="#1385c2" size={150} />
        </div> }
    <form action="" onSubmit={handleSubmit}>



   
        <div className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>

                <div className="grid max-w-2xl mx-auto mt-8">
                    <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">

                        <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                            src={imagePrev ? imagePrev : userDetail.image|| "" }
                            alt="Bordered avatar" />

                        <div className="flex flex-col space-y-5 sm:ml-8">

                            <div className='relative'>


                                   <label  htmlFor="image" className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 cursor-pointer ">Change Picture</label>
                            <input type="file" id='image' name='image' className='hidden'  onChange={(e)=>handleImageChange(e)} 
                                />
                            </div>
                         
                              
                            
                            <button type="button" onClick={()=> dispatch(deleteImage())}
                                className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                                Delete picture
                            </button>
                        </div>
                    </div>

                    <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                    




                        
                        <div
                            className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                            <div className="w-full">
                                <label htmlFor="username"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                   username</label>
                                <input type="text" id="username"
                                name='username'
                                    onChange={handleChange}
                                    value={values.username}
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="Your first name"  required />
                            </div>

                            <div className="w-full">
                                <label htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                     name</label>
                                <input type="text" id="name"
                                value={values.name}
                                onChange={handleChange}
                                name='name'
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="Your last name"  required />
                            </div>

                        </div>

                        <div className="mb-2 sm:mb-6">
                            <label htmlFor="email"
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                email</label>
                            <input type="email" id="email"
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="your.email@mail.com" required />
                        </div>

                        {/* <div className="mb-2 sm:mb-6">
                            <label htmlFor="profession"
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Profession</label>
                            <input type="text" id="profession"
                                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="your profession" required />
                        </div> */}

                       

                        <div className="flex justify-end">
                            <button type="submit"
                                className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>
    </>
  )
}

export default UserProfile
