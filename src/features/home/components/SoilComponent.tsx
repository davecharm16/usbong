import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card } from 'react-native-paper'

const SoilComponent = () => {
  return (
    <Card style={styles.container}>
      <View/>
    </Card>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor : '#295A54',
    borderRadius: 20,
    minHeight: 133,
    flexDirection : 'column',
  }
});

export default SoilComponent