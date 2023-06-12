import React from 'react'

import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import Home from './src/pages/Home'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();


  return <>
    {/* <SafeAreaView>
      <Home/> 
    </SafeAreaView> */}
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'My home' }}  component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
}
