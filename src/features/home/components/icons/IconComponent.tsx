import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';

export interface IconComponentProps {
  onPress: () => void;
  icon: React.ReactNode;
  style: StyleProp<ViewStyle>;
}

const IconComponent: React.FC<IconComponentProps> = ({
  onPress,
  icon,
  style,
}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconComponent;
