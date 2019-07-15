import { all, takeLatest } from 'redux-saga/effects'
import { runFetchRepos } from './github'
import { GitHubActionType } from '../actions/github'

function* rootSaga() {
  yield all([takeLatest(GitHubActionType.FETCH_REPOS_START, runFetchRepos)])
}

export default rootSaga
