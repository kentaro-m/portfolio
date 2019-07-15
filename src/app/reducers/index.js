import { combineReducers } from 'redux'
import { githubReducer } from './github'
import { qiitaReducer } from './qiita'
import { slideReducer } from './slide'
import { articleReducer } from './article'

const rootReducer = combineReducers({
  github: githubReducer,
  qiita: qiitaReducer,
  slide: slideReducer,
  article: articleReducer
})

export default rootReducer
