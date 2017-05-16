import { StyleSheet } from 'react-native'

let circleDiameter = 85

const styles = StyleSheet.create({
  timeBar: {
    height: 20,
    backgroundColor: 'red'
  },
  circle: {
    borderWidth: 2,
    borderColor: '#000000',
    width: circleDiameter,
    height: circleDiameter,
    backgroundColor: '#555555',
    borderRadius: circleDiameter / 2
  },
  image: {
    width: circleDiameter,
    height: circleDiameter
  },
  container: {
    borderWidth: 2,
    padding: 10,
    margin: 10
  }
})

export default styles
