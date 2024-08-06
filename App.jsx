// App.js
import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SignIn from './src/auth/SignIn';
import Personalized from './src/pages/Personalized';
import AdminPage from './src/pages/AdminPage';
import MyDrawer from './src/pages/MyDrawer';
import LogoComponent from './src/pages/LogoComponent';
import PDFScreen from './src/pages/PDFScreen';
import BottomTabNavigator from './src/componetns/Bottom';
import Header from './src/componetns/Header';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LogoComponent" component={LogoComponent} />
      <Stack.Screen name="SignUp" component={SignIn} />
      <Stack.Screen name="Header" component={Header} />
      <Stack.Screen name="Personalized-Help" component={Personalized} />
      <Stack.Screen name="AdminPage" component={AdminPage} />
      <Stack.Screen name="HomeOne" component={MyDrawer} />
      <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
      <Stack.Screen name="Pdf" component={PDFScreen} />
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
