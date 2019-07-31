import {combineReducers} from 'redux';
import {animalReducer} from './animalReducer';
import {donationReducer} from './donationReducer';
import {errorReducer} from './errorReducer';
import {loadingReducer} from './loadingReducer';

export const rootReducer = combineReducers({
  animals: animalReducer,
  donations: donationReducer,
  error: errorReducer,
  loading: loadingReducer
})