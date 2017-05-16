import React from 'react'
import { Component } from 'react'
import { View } from 'react-native'
import { TimeBar } from '../containers/TimeBar'
import { GameField } from '../containers/GameField'
import { GameStats } from '../containers/GameStats'

export class AppView extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.startGame()
  }

  startGame() {
    this.props.initializeGame(this.generateRandomPlanets())
  }

  generateRandomPlanets() {
    return planets = this.props.planets.map((planet) => {
      let isEmpty = Math.random() > 0.5;
      let isDude = Math.random() > 0.5;
      let leftOffset = Math.floor(Math.random() * 200);

      return {
        isEmpty: isEmpty,
        isDude: isDude,
        leftOffset: leftOffset
      }
    })
  }

  render() {
    return (
      <View >
        <TimeBar></TimeBar>
          <GameField></GameField>
          <GameStats></GameStats>
        </View>
      </View>
    )
  }
}
