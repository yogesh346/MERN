import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Redux/Task/Show';

configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default configureStore