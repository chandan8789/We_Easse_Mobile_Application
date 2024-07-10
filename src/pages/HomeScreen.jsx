import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {hp} from '../assets/commonCSS/GlobalCss';
import Images from '../assets/images';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontSize from '../assets/commonCSS/FontSize';
import Categorys from './Categorys';

const UserDetails = ({great, name, email}) => {
  return (
    <>
      <View style={{padding: hp(2)}}>
        <Text style={{color: 'black', fontSize: FontSize.fs18}}>{great}</Text>
        <Text
          style={{color: 'blue', fontSize: FontSize.fs24, fontWeight: 'bold'}}>
          {name}
        </Text>
        <Text style={{color: 'black', fontSize: FontSize.fs18}}>{email}</Text>
      </View>
    </>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <ImageBackground
        source={require('../assets/images/webg.jpg')}
        style={styles.background}>
        <View style={styles.container}>
          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: hp(2),
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeOne')}>
              <AntDesign name="home" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons
                name="notifications-none"
                size={30}
                color="black"
              />
            </TouchableOpacity>
          </View> */}
          <UserDetails
            great="Good Afternoon"
            name="John Doe"
            email="johndoe@gmail.com"
          />
          <View>
            <Text
              style={{
                color: 'black',
                paddingLeft: hp(2),
                fontSize: FontSize.fs18,
                fontWeight: '500',
              }}>
              Category 1
            </Text>
            <Categorys />
          </View>
          <View style={{marginTop: hp(2)}}>
            <Text
              style={{
                color: 'black',
                paddingLeft: hp(2),
                fontSize: FontSize.fs18,
                fontWeight: '500',
              }}>
              Category 2
            </Text>
            <Categorys />
          </View>
          <View style={{marginTop: hp(2), marginBottom: hp(2)}}>
            <Text
              style={{
                color: 'black',
                paddingLeft: hp(2),
                fontSize: FontSize.fs18,
                fontWeight: '500',
              }}>
              Category 3
            </Text>
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
  icon: {
    width: hp(2.5),
    height: hp(2.5),
    objectFit: 'contain',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    padding: hp(2),
  },
});
