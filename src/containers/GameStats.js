import { connect } from 'react-redux'
import { GameStatsView } from '../components/GameStatsView'

let mapStateToProps = ({game: {aliensKilled, dudesKilled}}) => {
  return { aliensKilled, dudesKilled }
}

let mapDispatchToProps = (dispatch) => {
  return {}
}

export const GameStats = connect(mapStateToProps, mapDispatchToProps)(GameStatsView)
