import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from '../tabs/HomeScreen';
import Instagram from '../tabs/Instagram';
import Facebook from '../tabs/Facebook';
import WhatsApp from '../tabs/WhatsApp';
import PersonalizeHelp from '../tabs/PersonalizeHelp';
import {hp} from '../assets/commonCSS/GlobalCss';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          // borderTopColor: '#cccccc',
          borderTopWidth: 0.5,
          height: hp(8),
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      {/* Home Screen */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign
              name="home"
              color={focused ? 'blue' : 'gray'}
              size={focused ? size + 8 : size}
            />
          ),
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        }}
      />

      {/* Instagram Screen */}
      <Tab.Screen
        name="Instagram"
        component={Instagram}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign
              name="instagram"
              color={focused ? 'purple' : 'gray'}
              size={focused ? size + 8 : size}
            />
          ),
        }}
      />

      {/* Facebook Screen */}
      <Tab.Screen
        name="Facebook"
        component={Facebook}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign
              name="facebook-square"
              color={focused ? '#3b5998' : 'gray'}
              size={focused ? size + 8 : size}
            />
          ),
        }}
      />

      {/* WhatsApp Screen */}
      <Tab.Screen
        name="WhatsApp"
        component={WhatsApp}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name="logo-whatsapp"
              color={focused ? '#25D366' : 'gray'}
              size={focused ? size + 8 : size}
            />
          ),
        }}
      />

      {/* Personalize Screen */}
      <Tab.Screen
        name="Personalize"
        component={PersonalizeHelp}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Entypo
              name="help"
              color={focused ? 'red' : 'gray'}
              size={focused ? size + 8 : size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
