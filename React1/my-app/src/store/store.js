import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/Showslice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
//store k andr sari application ka data API ka bhi hota hai
//ye data hume le k aana hotA HAI PROVIDER K Andr as a props
