import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Images from '../assets/images';
import {hp} from '../assets/commonCSS/GlobalCss';

const Header = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={Images.leftside}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Image source={Images.Home} style={styles.icon} resizeMode="contain" />
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
  },
  icon: {
    height: hp(3),
    width: hp(3),
  },
});
