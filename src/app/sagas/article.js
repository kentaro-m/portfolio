import { call, put } from 'redux-saga/effects'
import { getArticles } from '../lib/utils'
import { fetchArticles } from '../actions/article'

export function* runFetchArticles(action) {
  const { url, count } = action.payload

  try {
    const articles = yield call(getArticles, url, count)

    yield put(fetchArticles.success({ url, count }, { articles }))
  } catch (error) {
    yield put(fetchArticles.failure({ url, count }, error))
  }
}
