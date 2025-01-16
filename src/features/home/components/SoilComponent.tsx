import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Card} from 'react-native-paper';

interface SoilComponentProps {
  moisture?: number;
}

const SoilComponent: React.FC<SoilComponentProps> = ({moisture}) => {
  return (
    <Card style={styles.container}>
      <View>
        <Text style={styles.titleText}>Soil Moisture</Text>
        {moisture && <Text style={styles.valueText}>{moisture}%</Text>}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#295A54',
    borderRadius: 20,
    minHeight: 133,
    flexDirection: 'column',
    padding: 15,
  },
  titleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  valueText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default SoilComponent;
