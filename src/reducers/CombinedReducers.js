import {combineReducers} from 'redux';
import {HomeReducer} from './HomeReducer';

export const combinedReducers = combineReducers({
  Home: HomeReducer,
});
