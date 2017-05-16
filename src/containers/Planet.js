import { connect } from 'react-redux'
import { PlanetView } from '../components/PlanetView'

let mapStateToProps = ({game: {planets}}, {id}) => {
  return {
    ...planets[id]
  }
}

let mapDispatchToProps = (dispatch) => {
  return {}
}

export const Planet = connect(mapStateToProps, mapDispatchToProps)(PlanetView)
