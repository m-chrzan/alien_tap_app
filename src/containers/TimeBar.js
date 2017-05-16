import { connect } from 'react-redux'
import { TimeBarView } from '../components/TimeBarView'

let mapStateToProps = ({ game: { timeLeft } }) => {
  return { timeLeft }
}

let mapDispatchToProps = (dispatch) => {
  return {}
}

export const TimeBar = connect(mapStateToProps, mapDispatchToProps)(TimeBarView)
