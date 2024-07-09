import {StyleSheet, View} from 'react-native';
import React from 'react';
import SignIn from './src/auth/SignIn';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Personalized from './src/pages/Personalized';
import AdminPage from './src/pages/AdminPage';
import HomeScreen from './src/pages/HomeScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Header from './src/componetns/Header';
import MyDrawer from './src/pages/MyDrawer';
import LogoComponent from './src/pages/LogoComponent';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="LogoComponet" component={LogoComponent} />
      <Stack.Screen name="SignUp" component={SignIn} />
      <Stack.Screen name="Header" component={Header} />
      <Stack.Screen name="Personalized-Help" component={Personalized} />
      <Stack.Screen name="AdminPage" component={AdminPage} /> */}
      <Stack.Screen name="Home-Page" component={HomeScreen} />
      <Stack.Screen name="HomeOne" component={MyDrawer} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
