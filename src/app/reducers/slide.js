import { SlideActionType } from '../actions/slide'

const initialState = {
  slides: [],
  error: null
}

export const slideReducer = (state = initialState, action) => {
  switch (action.type) {
    case SlideActionType.FETCH_SLIDES_START:
      return {
        ...state,
        slides: []
      }
    case SlideActionType.FETCH_SLIDES_SUCCESS:
      return {
        ...state,
        slides: action.payload.result.slides
      }
    case SlideActionType.FETCH_SLIDES_FAILURE:
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
