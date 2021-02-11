import ModalActionTypes from './modal.types';

export const hideModal = () => ({
  type: ModalActionTypes.HIDE_MODAL,
});

export const showModal = () => ({
  type: ModalActionTypes.SHOW_MODAL,
});
