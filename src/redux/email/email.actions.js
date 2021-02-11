import emailjs from 'emailjs-com';
import EmailActionTypes from './email.types';
import { showModal } from '../modal/modal.actions';

export const sendEmailStart = () => ({
  type: EmailActionTypes.SEND_EMAIL_START,
});

export const sendEmailSuccess = (res) => ({
  type: EmailActionTypes.SEND_EMAIL_SUCCESS,
  payload: res.text,
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
        dispatch(sendEmailSuccess(res));
        dispatch(showModal());
      })
      .catch((err) => {
        dispatch(sendEmailFailure(err.text));
        dispatch(showModal());
      });
  };
};
