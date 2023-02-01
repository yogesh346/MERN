import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/Showslice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
