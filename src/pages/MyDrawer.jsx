import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {StatusBar, ImageBackground} from 'react-native';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import Announcements from './Announcements';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('SignUp');
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Home" onPress={() => navigation.navigate('Home')} />
      <DrawerItem
        label="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <DrawerItem
        label="Announcements"
        onPress={() => navigation.navigate('Announcements')}
      />

      <DrawerItem label="Logout" onPress={handleLogout} />
    </DrawerContentScrollView>
  );
};

const MyDrawer = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <Drawer.Navigator
        // screenOptions={{headerShown: false}}
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Announcements" component={Announcements} />
      </Drawer.Navigator>
    </>
  );
};

export default MyDrawer;
