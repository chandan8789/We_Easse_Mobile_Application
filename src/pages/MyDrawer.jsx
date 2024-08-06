import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../tabs/HomeScreen';
import ProfileScreen from './ProfileScreen';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        onPress={() => navigation.navigate('Home')}
        icon={({color, size}) => (
          <AntDesign name="home" color={color} size={size} />
        )}
      />

      <DrawerItem
        label="Profile"
        onPress={() => navigation.navigate('Profile')}
        icon={({color, size}) => (
          <AntDesign name="user" color={color} size={size} />
        )}
      />

      <DrawerItem
        label="Logout"
        onPress={handleLogout}
        icon={({color, size}) => (
          <AntDesign name="logout" color={color} size={size} />
        )}
      />
    </DrawerContentScrollView>
  );
};

const MyDrawer = () => {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </>
  );
};

export default MyDrawer;
