import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp} from '../assets/commonCSS/GlobalCss';
import {FontFamily} from '../assets/commonCSS/FontFamily';
import FontSize from '../assets/commonCSS/FontSize';

const SimpleButton = ({btnTitle, onPress}) => {
  return (
    <TouchableOpacity style={styles.submitButton} onPress={onPress}>
      <Text style={styles.btnSubmit}>{btnTitle}</Text>
    </TouchableOpacity>
  );
};

export default SimpleButton;

const styles = StyleSheet.create({
  submitButton: {
    borderWidth: hp(0.2),
    textAlign: 'center',
    borderRadius: hp(2),
    alignItems: 'center',
    paddingHorizontal: hp(3),
    paddingVertical: hp(1.5),
    backgroundColor: 'rgba(255, 246, 20, 1)',
    marginTop: hp(3.5),
    width: '80%',
    alignSelf: 'center',
    elevation: 10,
  },
  btnSubmit: {
    color: 'black',
    fontFamily: FontFamily.Shojumaru,
    fontSize: FontSize.fs18,
  },
});
