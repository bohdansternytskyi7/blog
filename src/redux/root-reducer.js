import { combineReducers } from 'redux';
import emailReducer from './email/email.reducer';

const rootReducer = combineReducers({ email: emailReducer });

export default rootReducer;
