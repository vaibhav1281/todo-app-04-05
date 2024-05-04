
import { createStore } from 'redux';

const initialState = {
  isAuthenticated: false,
  user: null,
};



function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {...state, isAuthenticated: true, user: action.payload };
    case 'LOGOUT':
      return {...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
