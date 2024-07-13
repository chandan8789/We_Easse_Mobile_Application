import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {hp, wp} from '../assets/commonCSS/GlobalCss';
import FontSize from '../assets/commonCSS/FontSize';
import Categorys from './Categorys';
import Announcements from './Announcements';
import ChangePassword from './ChangePassword';
import FeedbackSuggestion from './FeedbackSuggestion';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Subscription from './Subscription';
import Rates from './Rates';

const Drawer = createDrawerNavigator();

const UserDetails = ({great, name, email}) => {
  return (
    <View style={{padding: hp(2)}}>
      <Text style={{color: 'black', fontSize: FontSize.fs18}}>{great}</Text>
      <Text
        style={{color: 'blue', fontSize: FontSize.fs24, fontWeight: 'bold'}}>
        {name}
      </Text>
      <Text style={{color: 'black', fontSize: FontSize.fs18}}>{email}</Text>
    </View>
  );
};

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeContent} />
      <Drawer.Screen name="Sub-Category" component={Announcements} />
      <Drawer.Screen name="Change Password" component={ChangePassword} />
      <Drawer.Screen
        name="Feedback/Suggestion"
        component={FeedbackSuggestion}
      />
      <Drawer.Screen name="About Us" component={AboutUs} />
      <Drawer.Screen name="Contact Us" component={ContactUs} />
      <Drawer.Screen name="Subscription" component={Subscription} />
      <Drawer.Screen name="Rates Us" component={Rates} />
    </Drawer.Navigator>
  );
};

const HomeContent = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <ImageBackground
        source={require('../assets/images/webg.jpg')}
        style={styles.background}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <FontAwesome name="user-circle" size={30} color="black" />
            </TouchableOpacity>

            <View style={styles.helpContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Personalized-Help')}>
                <Ionicons name="help-circle-outline" size={30} color="black" />
              </TouchableOpacity>

              <TouchableOpacity>
                <MaterialIcons
                  name="notifications-none"
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>

          <UserDetails
            great="Good Afternoon"
            name="John Doe"
            email="johndoe@gmail.com"
          />
          <View>
            <Text style={styles.categoryTitle}>Category 1</Text>
            <Categorys />
          </View>
          <View style={{marginTop: hp(2)}}>
            <Text style={styles.categoryTitle}>Category 2</Text>
            <Categorys />
          </View>
          <View style={{marginTop: hp(2), marginBottom: hp(2)}}>
            <Text style={styles.categoryTitle}>Category 3</Text>
            <Categorys />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: hp(2),
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    padding: hp(2),
  },
  categoryTitle: {
    color: 'black',
    paddingLeft: hp(2),
    fontSize: FontSize.fs18,
    fontWeight: '500',
  },
  helpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: hp(2),
  },
});
