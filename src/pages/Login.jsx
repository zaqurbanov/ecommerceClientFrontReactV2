import { Button, Card, Typography,Input, useSelect } from '@material-tailwind/react'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { loginSchema } from '../yupSchemas/LoginSchema'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../ReduxSlicers/userSlice'
import Swal from 'sweetalert2'

const Login = () => {
  const dispatch = useDispatch()
  const userToken  = useSelector((state)=>state.user.user)
  const userStatus = useSelector((state)=>state.user.status)
  const isActiveUser = useSelector((state)=>state.user.isActive)
  const userError = useSelector((state)=>state.user.error)
  const navigate = useNavigate()
  
  
  const formik = useFormik({

    initialValues:{
      username:"",
      password:""
    },
    validationSchema:loginSchema,
    onSubmit:(values)=>{
      dispatch(loginUser(values))
      resetForm()
    }
  })


  useEffect(()=>{

     if(userError){
    Swal.fire({
      title:userError,
      icon:"error"

    })

  }
  },[userError])
 
  useEffect(() => {
    if (isActiveUser) {
      Swal.fire({
        timer: 1000,
        title: "Login Successful",
        icon: "success",
      });
      navigate('/');
    }
  }, [isActiveUser, navigate]);
  const {values,handleChange,errors,handleSubmit,resetForm} = formik
  return (
    <div className='flex justify-center items-center p-10 mt-52'>
         
     <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you!
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            User name
    {errors.username && <p className='text-[10px] text-red-600'>{errors.username}</p> }
            
          </Typography>
          <Input
            size="lg"
            placeholder="username"
            name='username'
            onChange={handleChange}
            value={values.username}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
            {errors.password && <p className='text-[10px] text-red-600'>{errors.password}</p> }
          </Typography>
          <Input
          value={values.password}
          onChange={handleChange}
          name='password'
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
      
     
        <Button className="mt-6" fullWidth type='submit'>
          sign in
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have not an account?{" "}
          <NavLink to="/register" className="font-medium text-gray-900">
            Sign Up
          </NavLink>
        </Typography>
      </form>
    </Card>
  
    </div>
  )
}

export default Login
