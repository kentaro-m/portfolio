import { ArticleActionType } from '../actions/article'

const initialState = {
  articles: [],
  error: null
}

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ArticleActionType.FETCH_ARTICLES_START:
      return {
        ...state,
        articles: []
      }
    case ArticleActionType.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload.result.articles
      }
    case ArticleActionType.FETCH_ARTICLES_FAILURE:
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
