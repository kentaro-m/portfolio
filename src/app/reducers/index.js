import { combineReducers } from 'redux'
import { githubReducer } from './github'

const rootReducer = combineReducers({
  github: githubReducer
})

export default rootReducer
