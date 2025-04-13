 import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Home from './Home'
import Cart from './Cart'
 
 const AllRoutes = () => {
   return (
     <div>
        <Navbar/>

       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
       </Routes>
     </div>
   )
 }
 
 export default AllRoutes