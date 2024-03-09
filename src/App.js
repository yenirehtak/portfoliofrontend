import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './Component/SignUp/SignUp';
import Login from './Component/Login/Login';
import Home from './Component/Home'
import ForgotPassword from './Component/ForgotPassword/ForgotPassword';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<SignUp/>}> </Route>
        <Route path='/register' element={<SignUp/>}> </Route>
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/home' element={<Home/>}> </Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>


      </Routes>
    </BrowserRouter>
  );
}
export default App;
