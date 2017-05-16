import { combineReducers } from 'redux'

const initialState = {
  planets: [
    {}, {}, {}, {}, {}
  ],
}

let game = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALIZE_GAME':
      return {
        ...initialState,
        planets: action.planets,
      }
    case 'RESPAWN':
      return {
        ...state,
        planets: action.planets
      }
    default:
      return state
  }
}

export const mainReducer = combineReducers({game})
