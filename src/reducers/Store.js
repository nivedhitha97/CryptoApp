import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import rootSaga from '../middleware/root/RootSaga';
import {combinedReducers} from './CombinedReducers';

const createSagaMiddleware = require('redux-saga').default;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export {store};
