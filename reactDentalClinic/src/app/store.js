
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../layout/userSlice';
import detailSlice from '../layout/detailSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        detail: detailSlice
    }
    
});