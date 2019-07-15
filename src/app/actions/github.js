export const GitHubActionType = {
  FETCH_REPOS_START: 'FETCH_REPOS/START',
  FETCH_REPOS_SUCCESS: 'FETCH_REPOS/SUCCEED',
  FETCH_REPOS_FAILURE: 'FETCH_REPOS/FAILURE'
}

export const fetchRepos = {
  start: params => ({
    type: GitHubActionType.FETCH_REPOS_START,
    payload: params
  }),
  success: (params, result) => ({
    type: GitHubActionType.FETCH_REPOS_SUCCESS,
    payload: { params, result }
  }),
  failure: (params, error) => ({
    type: GitHubActionType.FETCH_REPOS_FAILURE,
    payload: { params, error }
  })
}
