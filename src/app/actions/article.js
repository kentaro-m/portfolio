export const ArticleActionType = {
  FETCH_ARTICLES_START: 'FETCH_ARTICLES/START',
  FETCH_ARTICLES_SUCCESS: 'FETCH_ARTICLES/SUCCEED',
  FETCH_ARTICLES_FAILURE: 'FETCH_ARTICLES/FAILURE'
}

export const fetchArticles = {
  start: params => ({
    type: ArticleActionType.FETCH_ARTICLES_START,
    payload: params
  }),
  success: (params, result) => ({
    type: ArticleActionType.FETCH_ARTICLES_SUCCESS,
    payload: { params, result }
  }),
  failure: (params, error) => ({
    type: ArticleActionType.FETCH_ARTICLES_FAILURE,
    payload: { params, error }
  })
}