import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Header from '../componetns/Header';

const ChangePassword = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/webg.jpg')}
      style={{flex: 1}}>
      <Header navigation={navigation} />
      <ChangePassword />
    </ImageBackground>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
