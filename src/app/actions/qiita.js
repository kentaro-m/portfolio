import { GitHubActionType } from './github'

export const QiitaActionType = {
  FETCH_QIITA_ITEMS_START: 'FETCH_QIITA_ITEMS/START',
  FETCH_QIITA_ITEMS_SUCCESS: 'FETCH_QIITA_ITEMS/SUCCEED',
  FETCH_QIITA_ITEMS_FAILURE: 'FETCH_QIITA_ITEMS/FAILURE'
}

export const fetchQiitaItems = {
  start: params => ({
    type: QiitaActionType.FETCH_QIITA_ITEMS_START,
    payload: params
  }),
  success: (params, result) => ({
    type: QiitaActionType.FETCH_QIITA_ITEMS_SUCCESS,
    payload: { params, result }
  }),
  failure: (params, error) => ({
    type: QiitaActionType.FETCH_QIITA_ITEMS_FAILURE,
    payload: { params, error }
  })
}
