import { GitHubActionType } from '../actions/github'

const initialState = {
  repos: [],
  error: null
}

export const githubReducer = (state = initialState, action) => {
  switch (action.type) {
    case GitHubActionType.FETCH_REPOS_START:
      return {
        ...state,
        repos: []
      }
    case GitHubActionType.FETCH_REPOS_SUCCESS:
      return {
        ...state,
        repos: action.payload.result.repos
      }
    case GitHubActionType.FETCH_REPOS_FAILURE:
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
