import { all, takeLatest } from 'redux-saga/effects'
import { runFetchRepos } from './github'
import { runFetchQiitaItems } from './qiita'
import { GitHubActionType } from '../actions/github'
import { QiitaActionType } from '../actions/qiita'

function* rootSaga() {
  yield all([
    takeLatest(GitHubActionType.FETCH_REPOS_START, runFetchRepos),
    takeLatest(QiitaActionType.FETCH_QIITA_ITEMS_START, runFetchQiitaItems)
  ])
}

export default rootSaga
