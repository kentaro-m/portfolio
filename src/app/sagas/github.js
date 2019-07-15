import { call, put } from 'redux-saga/effects'
import { getRepos } from '../lib/utils'
import { fetchRepos } from '../actions/github'

export function* runFetchRepos(action) {
  const { user, topic } = action.payload

  try {
    const repos = yield call(getRepos, user, topic)

    yield put(fetchRepos.success({ user, topic }, { repos }))
  } catch (error) {
    yield put(fetchRepos.failure({ user, topic }, error))
  }
}
