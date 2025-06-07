import {
  FETCH_CURRENCY_LIST,
  FETCH_CURRENCY_LIST_ERROR,
  FETCH_CURRENCY_LIST_SUCCESS,
  RESET_INITIAL_STATE,
} from '../services/api/ApiConstantTypes';

const initialState = {
  loading: false,
  currencyListData: null,
  error: null,
};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCY_LIST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CURRENCY_LIST_SUCCESS:
      return {
        ...state,
        currencyListData: action.response,
        loading: false,
      };

    case FETCH_CURRENCY_LIST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case RESET_INITIAL_STATE:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
