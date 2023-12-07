import { combineReducers } from 'redux';
import VegetablesProvider from './vegetables/reducer';
import FruitsProvider from './fruits/reducer'

const rootReducer = combineReducers({
  fruits: FruitsProvider,
  vegetables: VegetablesProvider
});

export default rootReducer;