import React from "react";
import Swal from 'sweetalert2'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { resgisterSchema } from "../yupSchemas/RegisterSchema";
import axios from "axios";
import { BaseUrl } from "../enums/apiUrl";
import { ENDPOINTS } from "../enums/endpoints";
const Register = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name:"",
      username:"",
      password:"",
      email:""

    },
    validationSchema:resgisterSchema,
    onSubmit:async(values)=>{
        try {

          const response = await axios.post(`${BaseUrl}${ENDPOINTS.REGISTER_ENDPOINT}`,{...values})
        
          
          if(!response.data.success){
           throw new Error(response.data.message);
            
          }


            Swal.fire({
                icon:"success",
                position:"center",
                timer:"3000",
                title:response.data.message
                
            })

            navigate('/login')
            

           
        } catch (error) {
              Swal.fire({
          icon:'error',
          position:'center',
          timer:'3000',
          showConfirmButton:'false',
          title:error.response.data.message

        })
     
           
        }
    }
  });

  const { values, handleChange, handleSubmit, errors } = formik;

  return (
    <div className="flex justify-center items-center p-12">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
               {errors && <p className="text-[10px] text-red-700">{errors.name}</p> }
            </Typography>
            <Input
              size="lg"
        name="name"
        value={values.name}
        onChange={handleChange}
              placeholder="Name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Username
              {errors.username && <p className="text-[10px] text-red-700">{errors.username}</p> }
            </Typography>
            <Input
              size="lg"
              name="username"
              value={values.username}
              onChange={handleChange}
              placeholder="Username"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
              {errors.email && <p className="text-[10px] text-red-700">{errors.email}</p> }
            </Typography>
            <Input
              size="lg"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
              {errors.password && <p className="text-[10px] text-red-700">{errors.password}</p> }
            </Typography>
            <Input
            name="password"
            value={values.password}
            onChange={handleChange}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
     
          <Button type="submit" className="mt-6" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <NavLink to={'/login'} className="font-medium text-gray-900">
              Sign In
            </NavLink>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Register;
