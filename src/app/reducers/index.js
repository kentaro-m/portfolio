import { combineReducers } from 'redux'
import { githubReducer } from './github'
import { qiitaReducer } from './qiita'
import { slideReducer } from './slide'

const rootReducer = combineReducers({
  github: githubReducer,
  qiita: qiitaReducer,
  slide: slideReducer
})

export default rootReducer
