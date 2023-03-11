import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Home } from './Home';
import { Login } from './Login';
import { NewAppointment } from './NewAppointment';
import { Register } from './Register';
import './MainApp.css'
// import { Footer } from '../components/Footer';
import { Profile } from './Profile';
import { Appointments } from './Appointments';
import { Doctors } from './Doctors';
import { Treatments } from './Treatments';
import { AboutUs } from './AboutUs';
import { Contact } from './Contact';

export const MainApp = () => {
  return (
    <>
    <NavBar/>

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/newAppointment' element={<NewAppointment/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/appointments' element={<Appointments/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/treatments' element={<Treatments/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}
