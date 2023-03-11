import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Home } from './Home';
import { Login } from './Login';
import { NewAppointment } from './NewAppointment';
import { Register } from './Register';
import './MainApp.css'
import { Footer } from '../components/Footer';

export const MainApp = () => {
  return (
    <>
    <NavBar/>

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/newAppointment' element={<NewAppointment/>}/>
    </Routes>
    </>
  )
}
