import React, {useState, useEffect} from 'react';
import {View, Animated, StyleSheet, Image} from 'react-native';

const LogoComponent = ({navigation}) => {
  const [rotation] = useState(new Animated.Value(0));
  const [zoom] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(rotation, {
        toValue: 360,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(zoom, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(() => {
      navigation.navigate('SignUp');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/images/playstore-icon.png')}
        style={[
          styles.logo,
          {
            transform: [
              {
                rotate: rotation.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                }),
              },
              {
                scale: zoom,
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default LogoComponent;
