import { combineReducers } from 'redux'
import { githubReducer } from './github'
import { qiitaReducer } from './qiita'

const rootReducer = combineReducers({
  github: githubReducer,
  qiita: qiitaReducer
})

export default rootReducer
