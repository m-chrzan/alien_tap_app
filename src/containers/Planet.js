import { connect } from 'react-redux'
import { PlanetView } from '../components/PlanetView'

let mapStateToProps = ({game: {planets}}, {id}) => {
  return {
    ...planets[id]
  }
}

let mapDispatchToProps = (dispatch, {id}) => {
  return {
    onKill: () => {
      dispatch({
        type: 'KILL',
        id: id
      })
    }
  }
}

export const Planet = connect(mapStateToProps, mapDispatchToProps)(PlanetView)
