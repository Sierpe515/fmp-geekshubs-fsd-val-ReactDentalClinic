import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { NewAppointment } from '../NewAppointment/NewAppointment';
import { Register } from '../Register/Register';
import { Profile } from '../Profile/Profile';
import { ProfileUpdate } from '../ProfileUpdate/ProfileUpdate';
import { Appointments } from '../Appointments/Appointments';
import { Doctors } from '../Doctors/Doctors';
import { Treatments } from '../Treatment/Treatments';
import { AboutUs } from '../../layout/AboutUs/AboutUs';
import { Contact } from '../Contact/Contact';
import './Body.css'
import { UsersList } from '../UsersList/UsersList';
import { UserDetail } from '../userDetail/UserDetail';
import { AppointmentDetail } from '../appointmentDetail/AppointmentDetail';
import { UserDetailDoctor } from '../userDetail/userDetailDoctor';
import { AppointmentDetailDoctor } from '../appointmentDetail/AppointmentDetailDoctor';
import { AppointmentDetailUser } from '../appointmentDetail/AppointmentDetailUser';
import { AppointmentsUser } from '../Appointments/AppointmentsUser';
import { NewAppointmentAdm } from '../NewAppointment/NewAppointmentAdm';

export const Body = () => {
    return (
      <>
        <Routes>
        <Route path='*' element={<Navigate to='/'/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/newAppointment' element={<NewAppointment/>}/>
        <Route path='/newAppointmentAdm' element={<NewAppointmentAdm/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/updateProfile' element={<ProfileUpdate/>}/>
        <Route path='/appointments' element={<Appointments/>}/>
        <Route path='/appointmentsUser' element={<AppointmentsUser/>}/>
        <Route path='/appointmentDetail' element={<AppointmentDetail/>}/>
        <Route path='/appointmentDetailUser' element={<AppointmentDetailUser/>}/>
        <Route path='/appointmentDetailDoctor' element={<AppointmentDetailDoctor/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/treatments' element={<Treatments/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/usersList' element={<UsersList/>}/>
        <Route path='/userDetail' element={<UserDetail/>}/>
        <Route path='/userDetailDoctor' element={<UserDetailDoctor/>}/>
    </Routes>
      </>
    );
  };