import React, {useState, useEffect} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
} from 'react-native';
import {hp, wp} from '../assets/commonCSS/GlobalCss';
import CustomLoader from '../componetns/CustomLoader';
import FontSize from '../assets/commonCSS/FontSize';

const LogoComponent = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Dashboard');
  }, 2000);
  return (
    <>
      <ImageBackground
        source={require('../assets/images/webg.jpg')}
        style={styles.background}>
        <View style={styles.container}>
          <Image
            style={{height: hp(25), width: wp(25), resizeMode: 'contain'}}
            source={require('../assets/images/playstore-icon.png')}
          />
          <Text
            style={{
              color: 'green',
              fontSize: FontSize.fs18,
              fontWeight: '700',
            }}>
            Believe.. Achieve.. Lead..
          </Text>
        </View>
        <View style={{marginBottom: hp(5)}}>
          <CustomLoader />
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  customLoader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop: 10,
  },
});

export default LogoComponent;
