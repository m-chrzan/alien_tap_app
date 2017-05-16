import { connect } from 'react-redux'
import { AppView } from '../components/AppView'

let mapStateToProps = () => {
  return {}
}

let mapDispatchToProps = (dispatch) => {
  return {}
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppView)
