import {CHANGE_NAME, TOGGLE_PROFILE, IS_AUTH} from "./actions";

const initialState = {
  name: 'MegaUser',
  visible: true,
  isAuth: false
}

export const profileReducer = (state = initialState, action) => {
  const {type, payload} = action
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

    case IS_AUTH:
      return {
        ...state,
        isAuth: payload
      }

    default:
      return state
  }
}