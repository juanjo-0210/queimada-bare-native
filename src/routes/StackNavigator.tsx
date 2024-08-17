/* eslint-disable react/no-unstable-nested-components */
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Game, Home } from '../screens';
import { Icon } from '../components/Icon';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FatherRootStackParams } from './FatherStackNavigation';

export type RootStackParams = {
  home: undefined;
  game: {paramURL?: string};
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

   const navigation = useNavigation<NavigationProp<FatherRootStackParams>>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerRight: () => <Icon name="help-circle-outline" color="white" onPress={ () => navigation.navigate('help')} dimensions={true} />,
        headerStyle: {
          backgroundColor: '#f49230',

        },
      }}
    >
      <Stack.Screen options={{title: 'Queimada Nivel Q'}} name="home" component={Home}/>
      <Stack.Screen name="game" component={Game}  />
    </Stack.Navigator>
  );
};
