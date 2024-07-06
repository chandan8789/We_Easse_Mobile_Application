import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {hp} from '../assets/commonCSS/GlobalCss';
import {FontFamily} from '../assets/commonCSS/FontFamily';

const CommonButton = ({buttontitle, onPress, backgroundColor}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: backgroundColor}]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{buttontitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFF',
    paddingVertical: hp(1.5),
    paddingHorizontal: hp(3),
    width: '80%',
    borderRadius: hp(2),
    alignItems: 'center',
    marginTop: hp(5),
    borderWidth: hp(0.2),
    borderColor:
      'gradient(90deg, rgba(199, 90, 195, 0.37) 0%, rgba(224, 48, 209, 0.7039) 53%, rgba(228, 41, 212, 0.7606) 62%, #F50BDE 100%)',
    elevation: 5,
    alignSelf: 'center',
  },
  buttonText: {
    fontFamily: FontFamily.Shojumaru,
    color: 'black',
  },
});

export default CommonButton;
