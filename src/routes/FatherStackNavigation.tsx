import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BottomTabsNavigation } from './BottomTabsNavigation';
import { HelperStackNavigator } from './HelperStackNavigation';

export type FatherRootStackParams = {
  navigation: undefined;
  help: undefined;
}

const Stack = createStackNavigator<FatherRootStackParams>();


export const FatherStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="navigation"
        component={BottomTabsNavigation}
      />

      <Stack.Screen
        name="help"
        component={HelperStackNavigator}
        options={{
          headerStyle: {
            backgroundColor: '#f49230',
          },
        }}
      />
    </Stack.Navigator>
  );
};
