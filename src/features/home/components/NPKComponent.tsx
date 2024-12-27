import React from 'react';
import {ColorValue, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import {colors} from '../../../core/utils/constants';

const NPKComponent = ({
  title,
  percent,
  color,
}: {
  title: string;
  percent: number;
  color: ColorValue;
}) => {
  const percentage = 227 * (percent / 100);
  const style = styles({color, percent: percentage});
  return (
    <Card style={style.container}>
      <Text style={style.text}>{title}</Text>
      <View style={style.view} />
    </Card>
  );
};

const styles = ({color, percent}: {color: ColorValue; percent: number}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      height: 227,
      borderRadius: 999,
      backgroundColor: colors.background,
      justifyContent: 'flex-end',
    },
    view: {
      backgroundColor: color,
      height: percent,
      borderRadius: 999,
    },
    text: {
      textAlign: 'center',
      zIndex: 1,
      position: 'absolute',
      bottom: 10,
      color: colors.background,
    },
  });

export default NPKComponent;
