import EmailActionTypes from './email.types';
import emailjs from 'emailjs-com';

export const sendEmailStart = () => ({
  type: EmailActionTypes.SEND_EMAIL_START,
});

export const sendEmailSuccess = () => ({
  type: EmailActionTypes.SEND_EMAIL_SUCCESS,
});

export const sendEmailFailure = (errorMessage) => ({
  type: EmailActionTypes.SEND_EMAIL_FAILURE,
  payload: errorMessage,
});

export const sendEmailStartAsync = (data) => {
  return (dispatch) => {
    emailjs.init('user_WbEeGqTd042Flt6s37JGf');
    dispatch(sendEmailStart());

    emailjs
      .sendForm('service_x2c8r8w', 'template_v0igrgb', data)
      .then((res) => {
        console.log(res.text);
        dispatch(sendEmailSuccess());
      })
      .catch((err) => {
        console.log(err);
        return dispatch(sendEmailFailure(err.text));
      });
  };
};
