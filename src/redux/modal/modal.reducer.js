import ModalActionTypes from './modal.types';

const INITIAL_STATE = {
  hidden: true,
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalActionTypes.HIDE_MODAL:
      return { ...state, hidden: true };
    case ModalActionTypes.SHOW_MODAL:
      return { ...state, hidden: false };
    default:
      return state;
  }
};

export default modalReducer;
