import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserAuthContextProvider } from '../Context/userAuthContext';
import Home from "../Pages/Home/Home";
import Login from "../Pages/loginAndSignup/Login"
import Signup from '../Pages/loginAndSignup/Signup';
const Allroutes = () => {
  return (
    <div>
      <UserAuthContextProvider>

        <Routes>
            <Route path='/' element={<Home/> } />
            <Route path='/login' element={<Login/> } />
            <Route path='/signup' element={<Signup/> } />
        </Routes>
      </UserAuthContextProvider>
    </div>
  )
}

export default Allroutes