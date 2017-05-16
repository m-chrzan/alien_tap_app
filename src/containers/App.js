import { connect } from 'react-redux'
import { AppView } from '../components/AppView'

let mapStateToProps = ({game: {planets}}) => {
  return { planets }
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
    }
  }
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppView)
