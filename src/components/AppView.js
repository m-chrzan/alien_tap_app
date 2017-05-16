import React from 'react'
import { Component } from 'react'
import { View, Button } from 'react-native'
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
    this.startTimer()
  }

  startTimer() {
    this.timer = setInterval(this.onInterval, 100)
  }

  stopTimer() {
    clearInterval(this.timer)
  }

  onInterval = () => {
    if (this.props.timeLeft > 0) {
      this.props.tick()
    } else {
      this.stopTimer()
    }
  }

  respawn = () => {
    this.props.respawn(this.generateRandomPlanets())
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
          <Button title="Respawn" onPress={this.respawn}></Button>
        </View>
      </View>
    )
  }
}
