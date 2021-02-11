import { createStore } from 'redux';
import { createSelector } from 'reselect';

const selectEmail = (state) => state.email;

export const selectIsSending = createSelector(
  [selectEmail],
  (email) => email.isSending,
);

export const selectSentSuccessfully = createSelector(
  [selectEmail],
  (email) => email.sentSuccessfully,
);
