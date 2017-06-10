import { combineReducers } from 'redux'

const initialState = {
  planets: [
    {}, {}, {}, {}, {}
  ],
  aliensKilled: 0,
  dudesKilled: 0,
  timeLeft: 600
}

let game = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALIZE_GAME':
      return {
        ...initialState,
        planets: action.planets
      }
    case 'RESPAWN':
      return {
        ...state,
        planets: action.planets
      }
    case 'KILL':
      let newAliensKilled = state.aliensKilled
      let newDudesKilled = state.dudesKilled
      if (state.planets[action.id].isDude) {
        newDudesKilled++
      } else {
        newAliensKilled++
      }

      return {
        ...state,
        planets: state.planets.map((planet, id) => {
          if (id === action.id) {
            return {
              ...planet,
              isEmpty: true
            }
          } else {
            return planet
          }
        }),
        aliensKilled: newAliensKilled,
        dudesKilled: newDudesKilled
      }
    case 'TICK':
      return {
        ...state,
        timeLeft: state.timeLeft - 1
      }
    default:
      return state
  }
}

export const mainReducer = combineReducers({game})
