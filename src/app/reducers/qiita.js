import { QiitaActionType } from '../actions/qiita'

const initialState = {
  qiitaItems: [],
  error: null
}

export const qiitaReducer = (state = initialState, action) => {
  switch (action.type) {
    case QiitaActionType.FETCH_QIITA_ITEMS_START:
      return {
        ...state,
        qiitaItems: []
      }
    case QiitaActionType.FETCH_QIITA_ITEMS_SUCCESS:
      return {
        ...state,
        qiitaItems: action.payload.result.qiitaItems
      }
    case QiitaActionType.FETCH_QIITA_ITEMS_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    default: {
      const _ = action
      return state
    }
  }
}
