import EmailActionTypes from './email.types';

const INITIAL_STATE = {
  isSending: false,
  sentSuccessfully: false,
  errorMessage: '',
};

const emailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EmailActionTypes.SEND_EMAIL_START:
      return {
        ...state,
        isSending: true,
        sentSuccessfully: false,
      };
    case EmailActionTypes.SEND_EMAIL_SUCCESS:
      return {
        ...state,
        isSending: false,
        sentSuccessfully: true,
      };
    case EmailActionTypes.SEND_EMAIL_FAILURE:
      return {
        ...state,
        isSending: false,
        sentSuccessfully: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default emailReducer;
