import {put, takeLatest} from 'redux-saga/effects';
import {getApi} from '../../services/api/ApiManager';
import {
  FETCH_CURRENCY_LIST,
  FETCH_CURRENCY_LIST_ERROR,
  FETCH_CURRENCY_LIST_SUCCESS,
} from '../../services/api/ApiConstantTypes';
import {API_URL} from '../../services/api/ApiConstants';

function* CurrencyList({payload}) {
  try {
    const response = yield getApi(API_URL, payload);
    //functionality
    console.log('getApi:::::resp ', response.data);

    yield put({type: FETCH_CURRENCY_LIST_SUCCESS, response});
  } catch (error) {
    yield put({type: FETCH_CURRENCY_LIST_ERROR, error: error.message});
  }
}

export default function* currencySaga() {
  yield takeLatest(FETCH_CURRENCY_LIST, CurrencyList);
}
