import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Images from '../assets/images';
import {hp} from '../assets/commonCSS/GlobalCss';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <AntDesign name="home" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    // paddingHorizontal: hp(2),
    // paddingVertical: hp(2),
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: hp(1),
  },
  icon: {
    height: hp(3),
    width: hp(3),
  },
});
