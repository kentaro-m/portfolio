import { call, put } from 'redux-saga/effects'
import { getQiitaItems } from '../lib/utils'
import { fetchQiitaItems } from '../actions/qiita'

export function* runFetchQiitaItems(action) {
  const { count } = action.payload

  try {
    const qiitaItems = yield call(getQiitaItems, count)

    yield put(fetchQiitaItems.success({ count }, { qiitaItems }))
  } catch (error) {
    yield put(fetchQiitaItems.failure({ count }, error))
  }
}
