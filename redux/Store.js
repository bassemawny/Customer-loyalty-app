import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rewardsReducer from './Reducer';
const rootReducer = combineReducers({
  rewardsReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
