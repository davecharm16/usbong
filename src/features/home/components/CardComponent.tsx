import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-paper';
import NotifComponent from './NotifComponent';
import SoilComponent from './SoilComponent';
import PHAndSalinity from './PHAndSalinity';
import NPKComponent from './NPKComponent';
import {colors} from '../../../core/utils/constants';
import {useNPKStore} from '../../../hooks/useNPKStore';

const CardComponent = () => {
  const {data: npk, loading: npkLoading, error: npkError} = useNPKStore();

  useEffect(() => {
    console.log(npk);
  }, [npk]);

  if (npkLoading) {
    return <Text>Loading...</Text>;
  }

  if (npkError) {
    return <Text>Error: {npkError}</Text>;
  }

  return (
    <Card style={styles.cardContainer}>
      {/* First Row */}
      <View style={styles.row}>
        <NotifComponent />
        <SoilComponent />
      </View>

      <View style={styles.row}>
        <PHAndSalinity />
        <View style={styles.wrapper}>
          <NPKComponent
            title="N"
            percent={(npk && npk?.n) || 0}
            color={colors.primary}
          />
          <NPKComponent
            title="P"
            percent={(npk && npk?.p) || 0}
            color={colors.secondary}
          />
          <NPKComponent
            title="K"
            percent={(npk && npk?.k) || 0}
            color={colors.teal}
          />
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Temperature: 30</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
          <Text style={styles.secondaryButtonText}>USBONG</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 50,
    backgroundColor: '#FEFEFE',
    minHeight: 600,
    minWidth: 300,
    flexDirection: 'column',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    gap: 20,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    gap: 15,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    width: '100%',
    height: 56.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
  },
  buttonText: {
    color: colors.background,
  },
  secondaryButtonText: {
    color: colors.background,
    fontWeight: 'bold',
  },
});

export default CardComponent;
