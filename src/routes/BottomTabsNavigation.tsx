/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StackNavigator } from './StackNavigator';
import { Reserve } from '../screens';
import { Icon } from '../components/Icon';
import { ChatScreen } from '../screens/ChatScreen';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FatherRootStackParams } from './FatherStackNavigation';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigation = () => {


    const navigation = useNavigation<NavigationProp<FatherRootStackParams>>();
  return (

    <Tab.Navigator

      screenOptions={{
        tabBarActiveTintColor: '#f49230',
        headerRight: () => <Icon name="help-circle-outline" color="white" onPress={ () => navigation.navigate('help')} dimensions={true} />,
      }}
    >
      <Tab.Screen
        name="StackNavigation"
        component={StackNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => (<Icon name={'home'} color={color} />),
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="reserve"
        component={Reserve}
        options={{
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#f49230',
          },
          title: 'Reserva',
          tabBarIcon: ({color}) => (<Icon name={'calendar'} color={color}/>),

        }}
      /> */}
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#f49230',
          },
          title: 'Asistente',
          tabBarIcon: ({color}) => (<Icon name={'chatbox'} color={color}/>),

        }}
      />
    </Tab.Navigator>

  );
};
