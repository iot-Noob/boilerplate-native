import { createStore } from 'redux';

// Initial state of your application
const initialState = {
  name: null
};

// Reducer function to update state based on actions
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Example case to update name in state
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload
      };
    // Add more cases as needed for different actions
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(reducer);
 

export default store;
