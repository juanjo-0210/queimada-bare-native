
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Help } from '../screens';
import { Contact } from '../screens/Contact';
import { useNavigation } from '@react-navigation/native';

export type HelperRootStackParams = {
  init: undefined;
  contact: undefined;
}

const Stack = createStackNavigator<HelperRootStackParams>();

export const HelperStackNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {

    navigation.setOptions({
      headerShown: true,
    })

  },[])

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#f49230',
        },
      }}
    >
      <Stack.Screen name="init" component={Help}/>
      <Stack.Screen name="contact" component={Contact}/>
    </Stack.Navigator>
  );
};
