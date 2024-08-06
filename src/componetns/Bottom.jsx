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
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          let IconComponent = AntDesign;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Instagram':
              iconName = 'instagram';
              break;
            case 'Facebook':
              iconName = 'facebook-square';
              break;
            case 'WhatsApp':
              iconName = 'logo-whatsapp';
              IconComponent = Ionicons;
              break;
            case 'Personalize':
              iconName = 'help';
              IconComponent = Entypo;
              break;
            default:
              return null;
          }

          return <IconComponent name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopColor: 'gray',
          borderTopWidth: 0.5,
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Instagram" component={Instagram} />
      <Tab.Screen name="Facebook" component={Facebook} />
      <Tab.Screen name="WhatsApp" component={WhatsApp} />
      <Tab.Screen name="Personalize" component={PersonalizeHelp} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
