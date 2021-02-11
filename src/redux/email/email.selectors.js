import { createSelector } from 'reselect';

const selectEmail = (state) => state.email;

export const selectIsSending = createSelector(
  [selectEmail],
  (email) => email.isSending,
);

export const selectResponseMessage = createSelector(
  [selectEmail],
  (email) => email.responseMessage,
);
