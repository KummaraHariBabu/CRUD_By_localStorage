import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormContainer from '../components/form-container/FormContainer'
import UserDatabase from '../components/data-base/UserDatabase'
import EditUser from '../components/edit-user/EditUser'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<FormContainer />} />
          <Route path='/userdatabase' element={<UserDatabase />} /> 
          <Route path='/edituser/:userId' element={<EditUser />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter