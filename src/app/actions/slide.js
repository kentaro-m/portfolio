export const SlideActionType = {
  FETCH_SLIDES_START: 'FETCH_SLIDES/START',
  FETCH_SLIDES_SUCCESS: 'FETCH_SLIDES/SUCCEED',
  FETCH_SLIDES_FAILURE: 'FETCH_SLIDES/FAILURE'
}

export const fetchSlides = {
  start: params => ({
    type: SlideActionType.FETCH_SLIDES_START,
    payload: params
  }),
  success: (params, result) => ({
    type: SlideActionType.FETCH_SLIDES_SUCCESS,
    payload: { params, result }
  }),
  failure: (params, error) => ({
    type: SlideActionType.FETCH_SLIDES_FAILURE,
    payload: { params, error }
  })
}
