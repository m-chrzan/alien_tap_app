import { connect } from 'react-redux'
import { GameFieldView } from '../components/GameFieldView'

let mapStateToProps = ({game: {planets}}) => {
  return {
    planets
  }
}

let mapDispatchToProps = (dispatch) => {
  return {}
}

export const GameField = connect(mapStateToProps, mapDispatchToProps)(GameFieldView)
