import React, {useRef, useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

const CustomLoader = () => {
  const dot1Opacity = useRef(new Animated.Value(0)).current;
  const dot2Opacity = useRef(new Animated.Value(0)).current;
  const dot3Opacity = useRef(new Animated.Value(0)).current;
  const dot4Opacity = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.sequence([
      Animated.timing(dot1Opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(dot2Opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(dot3Opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(dot4Opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(dot1Opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(dot2Opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(dot3Opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(dot4Opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Restart the animation loop
      animate();
    });
  };

  useEffect(() => {
    animate(); // Start the animation loop
  }, []);

  return (
    <View style={styles.customLoader}>
      <Animated.View
        style={[styles.dot, {backgroundColor: '#FF5733', opacity: dot1Opacity}]}
      />
      <Animated.View
        style={[styles.dot, {backgroundColor: '#C70039', opacity: dot2Opacity}]}
      />
      <Animated.View
        style={[styles.dot, {backgroundColor: '#FF5733', opacity: dot3Opacity}]}
      />
      <Animated.View
        style={[styles.dot, {backgroundColor: '#C70039', opacity: dot4Opacity}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  customLoader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default CustomLoader;
