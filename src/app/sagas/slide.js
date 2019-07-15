import { call, put } from 'redux-saga/effects'
import { getSlides } from '../lib/utils'
import { fetchSlides } from '../actions/slide'

export function* runFetchSlides(action) {
  const { user, count } = action.payload

  try {
    const slides = yield call(getSlides, user, count)

    yield put(fetchSlides.success({ user, count }, { slides }))
  } catch (error) {
    yield put(fetchSlides.failure({ user, count }, error))
  }
}
