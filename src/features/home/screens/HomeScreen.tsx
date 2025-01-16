import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../core/utils/constants';
import CardComponent from '../components/CardComponent';

const HomeScreen = () => {
  return (
    <LinearGradient
    colors={colors.homeGradient}
    style={
      styles.gradient
    }
    >
      <CardComponent/>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient : {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});

export default HomeScreen;
