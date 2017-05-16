import { connect } from 'react-redux'
import { AppView } from '../components/AppView'

let mapStateToProps = ({game: {planets, timeLeft}}) => {
  return { planets, timeLeft }
}

let mapDispatchToProps = (dispatch) => {
  return {
    initializeGame: (planets) => {
      dispatch({
        type: 'INITIALIZE_GAME',
        planets: planets
      })
    },
    respawn: (planets) => {
      dispatch({
        type: 'RESPAWN',
        planets: planets
      })
    },
    tick: () => {
      dispatch({
        type: 'TICK'
      })
    }
  }
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppView)
