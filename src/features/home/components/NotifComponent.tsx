import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card } from 'react-native-paper';

const NotifComponent = () => {
  return (
    <Card style={styles.container}>
      <View></View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container : {
    borderRadius: 20,
    minHeight: 133,
    backgroundColor: '#EFEFEF',
    flex: 1,
    flexDirection: 'row',
  }
});

export default NotifComponent