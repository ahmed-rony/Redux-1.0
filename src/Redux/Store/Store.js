import { createStore } from 'redux'
import { cartReducer } from '../Reducer/cartReducer';

export const store = createStore(cartReducer);

// import { configureStore } from '@reduxjs/toolkit';


// export const store = configureStore({
//   reducer: {
//       cartReducer: cartReducer
//   },
// })