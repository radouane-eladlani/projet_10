import { configureStore } from '@reduxjs/toolkit';
import authReducer from '././reducers/authReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;


/*import { createStore } from 'redux';

// Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

export default store;*/