import React from 'react';
import {StyleSheet, TextInput, View, Image} from 'react-native';
import {hp} from '../assets/commonCSS/GlobalCss';
import {FontFamily} from '../assets/commonCSS/FontFamily';

const CInput = ({secureTextEntry, fieldsName, icon}) => {
  return (
    <View style={styles.inputContainer}>
      <Image source={icon} style={styles.icon} />
      <TextInput
        style={styles.inputField}
        secureTextEntry={secureTextEntry}
        placeholder={fieldsName}
        placeholderTextColor="#666"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: hp(0.2),
    paddingHorizontal: 10,
    borderRadius: hp(1.7),
    marginBottom: hp(1),
    marginTop: hp(1),
    elevation: 10,
    backgroundColor: 'white',
  },
  icon: {
    width: hp(2.5),
    height: hp(2.5),
    objectFit: 'contain',
  },
  inputField: {
    flex: 1,
    color: '#333',
    paddingLeft: hp(2),
  },
});

export default CInput;
