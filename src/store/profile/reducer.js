import {CHANGE_NAME, TOGGLE_PROFILE} from "./actions";

const initialState = {
  name: 'MegaUser',
  visible: true
}

export const profileReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: payload
      }
    case TOGGLE_PROFILE:
      return {
        ...state,
        visible: !state.visible
      }

    default:
      return state
  }
}