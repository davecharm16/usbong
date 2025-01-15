import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import {colors} from '../../../core/utils/constants';

export interface PHAndSalinityProps {
  ph?: number;
  salinity?: number;
}

const PHAndSalinity: React.FC<PHAndSalinityProps> = ({ph, salinity}) => {
  return (
    <View style={styles.container}>
      <Card style={styles.cardStyle}>
        <Text style={styles.titleText}>pH Level</Text>
        <Text style={styles.valueText}>{ph ?? ''}</Text>
      </Card>
      <Card style={[styles.cardStyle, {backgroundColor: '#84945C'}]}>
        <Text style={styles.titleText}>Soil Salinity</Text>
        <Text style={styles.valueText}>{salinity ?? ''}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 20,
  },
  cardStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#295A54',
    padding: 15,
  },
  titleText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  valueText: {
    color: colors.background,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default PHAndSalinity;
