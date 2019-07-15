import { all, takeLatest } from 'redux-saga/effects'
import { runFetchRepos } from './github'
import { runFetchQiitaItems } from './qiita'
import { runFetchSlides } from './slide'
import { GitHubActionType } from '../actions/github'
import { QiitaActionType } from '../actions/qiita'
import { SlideActionType } from '../actions/slide';

function* rootSaga() {
  yield all([
    takeLatest(GitHubActionType.FETCH_REPOS_START, runFetchRepos),
    takeLatest(QiitaActionType.FETCH_QIITA_ITEMS_START, runFetchQiitaItems),
    takeLatest(SlideActionType.FETCH_SLIDES_START, runFetchSlides)
  ])
}

export default rootSaga
