import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/webg.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>HomeScreen</Text>
      </View>
    </ImageBackground>
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
  text: {
    color: 'black',
  },
});

export default HomeScreen;
