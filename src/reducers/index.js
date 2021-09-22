import { combineReducers } from 'redux'
import charReducer from './charReducer'
import detailsReducer from './detailsReducer'
import itemListReducer from './itemListReducer'

const rootReducer = combineReducers({ charReducer, detailsReducer, itemListReducer });

console.log(rootReducer);
export default rootReducer;


