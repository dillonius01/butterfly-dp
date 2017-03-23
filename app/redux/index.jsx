import { combineReducers } from 'redux';
import rating from './rating';
import feedback from './feedback';

const rootReducer = combineReducers({
  rating,
  feedback
});

export default rootReducer;
