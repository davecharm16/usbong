import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card} from 'react-native-paper';
import IconComponent from './icons/IconComponent';
import PowerIcon from '../../../core/icons/PowerIcon';
import EditIcon from '../../../core/icons/EditIcon';
import TimeIcon from '../../../core/icons/TimeIcon';
import BellIcon from '../../../core/icons/BellIcon';
import {colors} from '../../../core/utils/constants';

const NotifComponent = () => {
  const iconStyle = [styles.icon, {backgroundColor: colors.primary}];

  return (
    <Card style={styles.container}>
      <View style={styles.row}>
        <IconComponent
          icon={<PowerIcon />}
          onPress={() => {}}
          style={iconStyle}
        />
        <IconComponent
          icon={<EditIcon />}
          onPress={() => {}}
          style={iconStyle}
        />
      </View>
      <View style={styles.row}>
        <IconComponent
          icon={<TimeIcon />}
          onPress={() => {}}
          style={iconStyle}
        />
        <IconComponent
          icon={<BellIcon />}
          onPress={() => {}}
          style={iconStyle}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    minHeight: 133,
    backgroundColor: '#EFEFEF',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  icon: {
    padding: 10,
    borderRadius: 999,
  },
});

export default NotifComponent;
