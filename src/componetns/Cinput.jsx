import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Image} from 'react-native';
import {hp} from '../assets/commonCSS/GlobalCss';
import FontSize from '../assets/commonCSS/FontSize';

const CInput = ({fieldsName, icon, keyboardType, maxLength, onChangeText}) => {
  return (
    <View style={styles.inputContainer}>
      <Image source={icon} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={fieldsName}
        keyboardType={keyboardType}
        maxLength={maxLength} // Limit the input to 10 characters
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: hp(1),
    marginTop: hp(1),
    backgroundColor: 'white',
  },
  icon: {
    width: hp(3),
    height: hp(3),
    marginRight: hp(1),
  },
  input: {
    flex: 1,
    height: hp(6),
    fontSize: FontSize.fs17,
    color: 'black',
  },
});
