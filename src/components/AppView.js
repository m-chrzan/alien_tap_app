import React, { Component } from 'react'
import { View, Button, Alert } from 'react-native'
import { TimeBar } from '../containers/TimeBar'
import { GameField } from '../containers/GameField'
import { GameStats } from '../containers/GameStats'
import styles from '../styles/styles'

export class AppView extends Component {
  componentDidMount () {
    this.startGame()
  }

  startGame () {
    this.props.initializeGame(this.generateRandomPlanets())
    this.startTimer()
  }

  startTimer () {
    this.timer = setInterval(this.onInterval, 50)
  }

  stopTimer () {
    clearInterval(this.timer)
  }

  onInterval = () => {
    if (this.props.timeLeft > 0) {
      this.props.tick()
    } else {
      this.stopTimer()
      this.alertEndOfGame()
    }
  }

  alertEndOfGame () {
    Alert.alert(
      'Game over!',
      'Final score: ' +
      (this.props.aliensKilled - this.props.dudesKilled),
      [ { text: 'Play again', onPress: () => this.startGame() } ],
      { cancelable: false }
    )
  }

  respawn = () => {
    this.props.respawn(this.generateRandomPlanets())
  }

  generateRandomPlanets () {
    return this.props.planets.map((planet) => {
      let roll = Math.random()
      let isEmpty = roll > 0.667
      let isDude = Math.random() > 0.333
      let leftOffset = Math.floor(Math.random() * 200)

      return {
        isEmpty: isEmpty,
        isDude: isDude,
        leftOffset: leftOffset
      }
    })
  }

  render () {
    return (
      <View>
        <TimeBar />
        <View style={styles.container}>
          <GameField />
          <GameStats />
          <Button title='Respawn' onPress={this.respawn} />
        </View>
      </View>
    )
  }
}
