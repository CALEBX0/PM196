import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screens/home';
import Profile from './screens/profile';
import Settings from './screens/settings';
import Profile_info from './screens/profile_info';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabScreens() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Profile') iconName = 'person';
          else if (route.name === 'Settings') iconName = 'settings';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home', headerTitleAlign: 'center' }} 
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Profile', headerTitleAlign: 'center' }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{title: 'Settings', headerTitleAlign: 'center' }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={TabScreens}
          options={{headerShown: false, headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="Profile_info"
          component={Profile_info}
          options={{ title: 'Detalles', headerTitleAlign: 'center' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
