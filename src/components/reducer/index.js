import { combineReducers } from 'redux';
import swapTokens from './swap/reducer';

const rootReducer = combineReducers({
  tokens: swapTokens,
});

export default rootReducer;