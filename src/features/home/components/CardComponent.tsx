import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card} from 'react-native-paper';
import NotifComponent from './NotifComponent';
import SoilComponent from './SoilComponent';
import PHAndSalinity from './PHAndSalinity';
import NPKComponent from './NPKComponent';
import {colors} from '../../../core/utils/constants';

const CardComponent = () => {
  return (
    <Card style={styles.cardContainer}>
      <View style={styles.rowOne}>
        <NotifComponent />
        <SoilComponent />
      </View>
      <View style={styles.rowTwo}>
        <PHAndSalinity />
        <View style={styles.wrapper}>
          <NPKComponent title="N" percent={80} color={colors.primary} />
          <NPKComponent title="P" percent={20} color={colors.secondary} />
          <NPKComponent title="K" percent={100} color={colors.teal} />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 50,
    backgroundColor: '#fefefe',
    minHeight: 600,
    minWidth: 300,
    flexDirection: 'column',
    padding: 20,
  },
  rowOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  wrapper: {flex: 1, flexDirection: 'row', gap: 15},
  rowTwo: {
    paddingTop: 20,
    maxHeight: 247,
    flex: 1,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
  },
});

export default CardComponent;
