import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {hp, wp} from '../assets/commonCSS/GlobalCss';
import FontSize from '../assets/commonCSS/FontSize';
import Categorys from '../pages/Categorys';
import Announcements from '../pages/Announcements';
import ChangePassword from '../pages/ChangePassword';
import FeedbackSuggestion from '../pages/FeedbackSuggestion';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Subscription from '../pages/Subscription';
import Rates from '../pages/Rates';
import ResetPassword from '../pages/ResetPassword';
import logo from '../assets/images/playstore-icon.png';

const Drawer = createDrawerNavigator();

const UserDetails = ({great, name, email}) => {
  return (
    <View style={styles.userDetailsContainer}>
      <Text style={styles.greetingText}>{great}</Text>
      <Text style={styles.userName}>{name}</Text>
      <Text style={styles.emailText}>{email}</Text>
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
      <Drawer.Screen name="Change Password" component={ResetPassword} />
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
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/images/webg.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <FontAwesome name="user-circle" size={30} color="black" />
          </TouchableOpacity>

          <Image source={logo} style={styles.logo} />

          <View style={styles.helpContainer}>
            <View style={styles.searchContainer}>
              {searchVisible && (
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search..."
                  placeholderTextColor="black"
                  value={searchText}
                  onChangeText={setSearchText}
                />
              )}
              <TouchableOpacity
                onPress={() => setSearchVisible(!searchVisible)}>
                <AntDesign name="search1" size={24} color="black" />
              </TouchableOpacity>
            </View>
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

        <ScrollView showsVerticalScrollIndicator={false}>
          <UserDetails
            great="Good Afternoon"
            name="John Doe"
            email="johndoe@gmail.com"
          />
          <Categorys />
        </ScrollView>
      </View>
    </ImageBackground>
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
    paddingVertical: hp(2),
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  logo: {
    height: hp(6),
    width: wp(12),
    resizeMode: 'contain',
    marginLeft: hp(8),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    height: hp(4.5),
    borderColor: '#cccccc',
    paddingHorizontal: hp(1),
    marginRight: hp(0.5),
    borderRadius: hp(1),
    width: wp(25),
    backgroundColor: 'white',
    elevation: 2,
  },

  helpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: hp(1),
  },
  userDetailsContainer: {
    padding: hp(2),
  },
  greetingText: {
    color: 'black',
    fontSize: FontSize.fs18,
  },
  userName: {
    color: 'blue',
    fontSize: FontSize.fs24,
    fontWeight: 'bold',
  },
  emailText: {
    color: 'black',
    fontSize: FontSize.fs18,
  },
});
