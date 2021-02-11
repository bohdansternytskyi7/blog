import { combineReducers } from 'redux';
import emailReducer from './email/email.reducer';
import modalReducer from './modal/modal.reducer';

const rootReducer = combineReducers({
  email: emailReducer,
  modal: modalReducer,
});

export default rootReducer;
