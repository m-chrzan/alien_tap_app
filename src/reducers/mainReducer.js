import { combineReducers } from 'redux'

const initialState = {}

let game = (state = initialState, action) => {
  return state
}

export const mainReducer = combineReducers({game})
