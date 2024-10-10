
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductDetails from './pages/ProductDetails'
import Navbar from './layout/Navbar'
import Header from './layout/Header'
import Basket from './components/Basket'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence } from 'framer-motion'
import { HashLoader } from 'react-spinners'
import Swal from 'sweetalert2'
import { useEffect } from 'react'
import Footer from './layout/Footer'
import UserProfile from './pages/UserProfile'
import axiosInterceptors from './enums/interceptor'
import ProtectedRoute from './routes/ProtectedRoute'
import { getUserById } from './ReduxSlicers/userSlice'

function App() {
const isActiveBasket = useSelector(state=>state.basket.isActive)
const isActiveUser = useSelector(state=>state.user.isActive)
const orderStatus = useSelector(state=>state.basket.status);
const orderMessage = useSelector(state=>state.basket.message)
const subsStatus = useSelector(state=>state.subscribe.status)
const testimonialStatus = useSelector(state=>state.testimonial.status)
const subsMessage = useSelector(state=>state.subscribe.message)
const subsError = useSelector(state=>state.subscribe.error)

const navigate = useNavigate()
const dispatch = useDispatch()


useEffect(()=>{
  const token  = sessionStorage.getItem('token')
  
  if(token){
    dispatch(getUserById())
  }
},[dispatch])
useEffect(()=>{
  axiosInterceptors();

},[])


useEffect(()=>{
{orderStatus  =="succeeded" || subsStatus =="succeeded" && 

  Swal.fire({
                  icon:"success",
                  position:"center",
                  timer:"3000",
                  title:orderMessage || subsMessage
                  
              }) }

     {orderStatus == "failed" ||subsStatus =="failed" && 

      Swal.fire({
        icon:"error",
        position:"center",
        timer:"3000",
        title:orderMessage || subsError
      })
     }         

},[orderStatus,subsStatus])

  return (
    <div className={`${orderStatus =="loading" || subsStatus=="loading" || testimonialStatus =="loading" ?"overflow-hidden h-screen ":"" }`}>



  {orderStatus =='loading' ||subsStatus == "loading" || testimonialStatus =="loading"&&  
<div className="absolute top-[50%] left-[50%] z-50 w-full h-full backdrop-blur-md translate-x-[-50%] translate-y-[-50%] flex justify-center items-center ">
<HashLoader color="red" />

</div>

}


   <Header/> 
   <AnimatePresence>

  {isActiveBasket &&
   <Basket />
  }
   </AnimatePresence>
  

    <Routes>
       
        <Route path='/' element={<Home />} />
        <Route path='/faq' element={<Faq/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product' element={<Product/>} />
         <Route path='/login' element={isActiveUser ? <Navigate to={'/'}/>: <Login/>} />


   <Route path='/register' element={isActiveUser ? <Navigate to={'/'}/>:<Register/>} /> 
        <Route path='/product/:id' element={<ProductDetails/>} />
        <Route path='/profile' element={
          <ProtectedRoute>
            <UserProfile/>
          </ProtectedRoute>
          } />


    </Routes>

    <Footer/>
    </div>
  )
}

export default App
