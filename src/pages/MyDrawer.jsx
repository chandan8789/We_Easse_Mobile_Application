import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {StatusBar, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
        label="Announcements"
        onPress={() => navigation.navigate('Announcements')}
        icon={({color, size}) => (
          <AntDesign name="notification" color={color} size={size} />
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
      {/* <StatusBar backgroundColor="white" barStyle="dark-content" /> */}

      <Drawer.Navigator
        screenOptions={{headerShown: false}}
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
