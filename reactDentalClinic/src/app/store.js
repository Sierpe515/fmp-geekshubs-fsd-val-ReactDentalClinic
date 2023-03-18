
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../layout/userSlice';
import detailSlice from '../layout/detailSlice';
import appointmentSlice from '../layout/appointmentSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        detail: detailSlice,
        appointment: appointmentSlice
    }
    
});