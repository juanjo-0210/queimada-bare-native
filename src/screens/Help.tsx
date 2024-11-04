import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Icon } from '../components/Icon';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HelperRootStackParams } from '../routes/HelperStackNavigation';
import { Switch } from 'react-native-paper';

interface TextualMenu {
  id: string;
  name: string;
  icon: string;
  slug?: keyof HelperRootStackParams;
  switch?: boolean
  mode?: boolean
}

export const Help = () =>  {
  const [isNotification, setIsNotification] = useState(false);
  const [isMode, setIsMode] = useState(false);
  const navigation = useNavigation<NavigationProp<HelperRootStackParams>>();


  const textualMenu: TextualMenu[] = [
    {
      id: '1',
      name: 'Contacto',
      icon: 'help-outline',
      slug: 'contact',
    },
    {
      id: '2',
      name: 'Notificacion',
      icon: 'notifications-outline',
      switch: true,
    },
    {
      id: '3',
      name: 'Mode',
      icon: 'moon-outline',
      mode: true,
    },
  ];

  return (
    <View style={Styles.container}>
      <FlatList
        data={textualMenu}
        renderItem={({item}) => (
          <Pressable
            onPress={() => item.slug ? navigation.navigate(item.slug) : console.log('none')}
          >
            <View style={Styles.row}>
              <View style={Styles.optionGroup}>
                <Icon name={item.icon} size={25} color="#f49230"/>
                <Text style={Styles.text}>{item.name}</Text>
              </View>
              {item.switch && <Switch
                value={isNotification}
                onValueChange={() => setIsNotification(!isNotification)}
                color="#f49230"
                style={Styles.switch}
              />}
              {item.mode && <Switch
                value={isMode}
                onValueChange={() => setIsMode(!isMode)}
                color="#f49230"
                style={Styles.switch}
              />}
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 'auto',
    flex: 1,
    maxWidth: 580,
    width: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: 'white',
    marginTop: 16,
    padding: 5,
    alignItems: 'center',
    justifyContent:'space-between',
  },
  text: {
    color: 'black',
  },
  optionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  switch: {
    alignSelf: 'baseline',
  },
});
