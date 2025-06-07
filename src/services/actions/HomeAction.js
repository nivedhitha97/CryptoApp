import {
  FETCH_CURRENCY_LIST,
  RESET_INITIAL_STATE,
} from '../api/ApiConstantTypes';

export const CurrencyListActions = () => ({
  type: FETCH_CURRENCY_LIST,
});

export const CurrencyListStateClear = () => ({
  type: RESET_INITIAL_STATE,
});
