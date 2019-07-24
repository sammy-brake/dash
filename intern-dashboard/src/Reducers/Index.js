import {combineReducers} from 'redux'
import internsReducer from './Interns_Reducer'

const rootReducer = combineReducers({
  interns: internsReducer,
  
  
})

export default rootReducer
