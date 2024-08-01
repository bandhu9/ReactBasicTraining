import { combineReducers } from 'redux';
import someReducer from './someReducer';
import userReducer from './userReducers';
const rootReducer = combineReducers({
  some: someReducer,
  users: userReducer
  // Add more reducers as needed
});

export default rootReducer;
