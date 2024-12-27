import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';

const PHAndSalinity = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.phStyle}>
        <Text>pH Level</Text>
      </Card>
      <Card style={styles.salinityStyle}>
        <Text>Soil Salinity</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flexDirection : 'column',
    gap: 20,
    flex:1,
  },
  phStyle : {
    backgroundColor : '#295A54',
    flex: 1,
    flexDirection: 'column',
  },
  salinityStyle : {
    backgroundColor : '#84945C',
    flex: 1,
    flexDirection: 'column',
  },
});

export default PHAndSalinity;
