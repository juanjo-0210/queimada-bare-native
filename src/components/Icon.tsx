
import React from 'react';
import { StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string,
  size?: number,
  color?: string
  onPress?: () => void,
  dimensions?: boolean,
}
export const Icon = ({name, size = 30, color = '#000', onPress, dimensions}:Props) => {
  return (
    <Icons
      name={name}
      size={size}
      color={color}
      onPress={onPress}
      style={Styles(dimensions).dimension}
    />
  );
};

const Styles = (dimensions?: boolean) => StyleSheet.create({
  dimension: {
    margin: dimensions ? 5 : 0,
  },
});
