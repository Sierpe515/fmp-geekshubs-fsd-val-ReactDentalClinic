import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { NewAppointment } from '../NewAppointment/NewAppointment';
import { Register } from '../Register/Register';
import { Profile } from '../Profile/Profile';
import { Appointments } from '../Appointments/Appointments';
import { Doctors } from '../Doctors/Doctors';
import { Treatments } from '../Treatment/Treatments';
import { AboutUs } from '../../layout/AboutUs/AboutUs';
import { Contact } from '../Contact/Contact';
import './Body.css'

export const Body = () => {
    return (
      <>
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
    );
  };