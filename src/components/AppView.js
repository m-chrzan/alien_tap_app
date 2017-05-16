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

  render() {
    return (
      <View >
        <TimeBar></TimeBar>
        <View>
          <GameField></GameField>
          <GameStats></GameStats>
        </View>
      </View>
    )
  }
}
