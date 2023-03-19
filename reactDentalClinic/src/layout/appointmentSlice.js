import { createSlice } from '@reduxjs/toolkit';

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState: {
      choosenAppointment: {}
    },
    reducers: {
      addAppointment: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      addAppointmentUser: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
    }
    
});

export const { addAppointment, addAppointmentUser } = appointmentSlice.actions;

export const appointmentDetailData = (state) => state.appointment;

export default appointmentSlice.reducer;