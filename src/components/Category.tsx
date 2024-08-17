import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { TouchableRipple } from 'react-native-paper';

export default function Category() {

  const category = [
    {
      id: '1',
      name: 'Estrategia',
    },
    {
      id: '2',
      name: 'Roll',
    },
    {
      id: '3',
      name: 'Didactico',
    },
    {
      id: '4',
      name: 'Recreativo',
    },
    {
      id: '5',
      name: 'Azar',
    },
    {
      id: '6',
      name: 'Cooperativo',
    },
    {
      id: '7',
      name: 'Equipos',
    },
    {
      id: '8',
      name: 'TcT',
    },
    {
      id: '9',
      name: 'Minuaturas',
    },
    {
      id: '10',
      name: 'Abstracto',
    },
     {
      id: '11',
      name: 'Azar',
    },
    {
      id: '12',
      name: 'Cooperativo',
    },
    {
      id: '13',
      name: 'Equipos',
    },
    {
      id: '14',
      name: 'TcT',
    },
    {
      id: '15',
      name: 'Minuaturas',
    },
    {
      id: '16',
      name: 'Abstracto',
    },
  ];

  return (
    <View style={Styles.conntainer}>
      <FlatList
        data={category}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableRipple
            borderless={true}
            onPress={() => console.log('Pressed')}
            rippleColor="rgba(0, 0, 0, .32)"
            style={Styles.ripple}
          >
            <Text style={Styles.bubble}>{item.name}</Text>
          </TouchableRipple>
        )}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  conntainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flatListContainer: {
    paddingHorizontal: 10,
  },
  ripple: {
    marginHorizontal: 8,
    marginVertical: 5,
    borderRadius: 25,
  },
  bubble: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 25,
    backgroundColor: '#fff',
  },
});
