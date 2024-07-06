// import * as React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import HomeScreen from './HomeScreen';
// import ProfileScreen from './ProfileScreen';
// import {StatusBar} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

// const Drawer = createDrawerNavigator();

// const MyDrawer = () => {
//   return (
//     <>
//       <StatusBar backgroundColor="white" barStyle="dark-content" />
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Profile" component={ProfileScreen} />
//       </Drawer.Navigator>
//     </>
//   );
// };

// export default MyDrawer;
import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

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
      <DrawerItem label="Logout" onPress={handleLogout} />
    </DrawerContentScrollView>
  );
};

const MyDrawer = () => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </>
  );
};

export default MyDrawer;
