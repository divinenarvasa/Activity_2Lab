import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ManageUserScreen from './ManageUserScreen'; 
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen 
          name="ManageUser" 
          component={ManageUserScreen} 
          options={{ headerShown: true, title: 'Manage User' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
