import React from 'react';
import { StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../core/utils/constants';

const HomeScreen = () => {
  return (
    <LinearGradient
    colors={colors.homeGradient}
    style={
      styles.gradient
    }
    >
      <Text>Homescreen</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient : {
    flex : 1,
  }
});

export default HomeScreen;
