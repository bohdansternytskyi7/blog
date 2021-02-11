import EmailActionTypes from './email.types';

const successMsg =
  'Your message was successfully sent with the fastest space mail delivery🚀';
const failureMsg = "Couldn't send your message 💩";

const INITIAL_STATE = {
  isSending: false,
  responseMessage: '',
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
        responseMessage: successMsg,
      };
    case EmailActionTypes.SEND_EMAIL_FAILURE:
      return {
        ...state,
        isSending: false,
        responseMessage: failureMsg,
      };
    default:
      return state;
  }
};

export default emailReducer;
