import {all} from 'redux-saga/effects';
import currencySaga from '../saga/HomeSaga';

function* rootSaga() {
  yield all([currencySaga()]);
}

export default rootSaga;
