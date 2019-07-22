import {combineReducers} from 'redux'
import internsReducer from './Interns_Reducer'
import internsFormData from './internsFormData';

const rootReducer = combineReducers({
  interns: internsReducer,
  internsFormData
  
})

export default rootReducer
