import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/Screens/LoginScreen';
import SignInScreen from './src/Screens/SignInScreen';
import Background from './src/components/Background';
import PatientHomeScreen from './src/Screens/Patient/PatientHomeScreen';
import NurseHomeScreen from './src/Screens/Nurse/NurseHomeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <Background>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="PatientHomeScreen" component={PatientHomeScreen} />
          <Stack.Screen name="NurseHomeScreen" component={NurseHomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Background>
  ); 
}

export default App;