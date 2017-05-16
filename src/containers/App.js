import { connect } from 'react-redux'
import { AppView } from '../components/AppView'

let mapStateToProps = ({game: {planets, timeLeft, aliensKilled, dudesKilled}}) => {
  return { planets, timeLeft, aliensKilled, dudesKilled }
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
