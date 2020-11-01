import React from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './src/reducers/store';

import LoginContainer from './src/containers/LoginContainer';
import NurseHomeContainer from './src/containers/NurseHomeContainer';
import PatientHomeContainer from './src/containers/PatientHomeContainer';
import SignInContainer from './src/containers/SignInContainer';

import LoginScreen from './src/Screens/LoginScreen';
import SignInScreen from './src/Screens/SignInScreen';
import Background from './src/components/Background';
import PatientHomeScreen from './src/Screens/Patient/PatientHomeScreen';
import NurseHomeScreen from './src/Screens/Nurse/NurseHomeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
    
      <Background>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" headerMode="none">
            <Stack.Screen name="Login" component={LoginContainer} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="PatientHomeScreen" component={PatientHomeContainer} />
            <Stack.Screen name="NurseHomeScreen" component={NurseHomeContainer} />
          </Stack.Navigator>
        </NavigationContainer>
      </Background>

    </Provider>
  ); 
}

export default App;