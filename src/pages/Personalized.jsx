import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../componetns/Header';
import {hp} from '../assets/commonCSS/GlobalCss';
import CInput from '../componetns/Cinput';
import Images from '../assets/images';
import FontSize from '../assets/commonCSS/FontSize';
import {FontFamily} from '../assets/commonCSS/FontFamily';
import SimpleButton from '../componetns/SimpleButton';

const Personalized = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleMobileNumberChange = text => {
    const numericText = text.replace(/[^0-9]/g, '');
    setMobileNumber(numericText);

    if (numericText.length > 10) {
      Alert.alert('Error', 'Please enter a 10-digit mobile number');
    }
  };
  return (
    <ImageBackground
      source={require('../assets/images/webg.jpg')}
      style={styles.background}>
      <Header navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <Text style={styles.pageName}>Personalized Help</Text>

        <Text style={styles.fieldName}>Email</Text>
        <CInput
          title="email-address"
          fieldsName="Enter Your Email"
          icon={Images.Lock}
          textContentType="emailAddress"
          keyboardType="email-address" // Ensure the keyboard is for email input
        />

        <Text style={styles.fieldName}>Mobile Number</Text>
        <CInput
          fieldsName="Enter Your Mobile Number"
          icon={Images.Calls}
          keyboardType="numeric"
          maxLength={10}
          onChangeText={handleMobileNumberChange}
        />

        <Text style={styles.fieldName}>Description (1-500 words)</Text>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="Type here..."
        />

        <SimpleButton
          btnTitle="Submit"
          onPress={() => navigation.navigate('AdminPage')}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Personalized;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(5),
  },
  pageName: {
    fontSize: FontSize.fs30,
    marginBottom: hp(1),
    color: 'black',
    fontFamily: FontFamily.Shojumaru,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    padding: hp(2),
  },
  fieldName: {
    color: 'black',
    fontSize: FontSize.fs20,
    marginTop: hp(2),
    fontFamily: FontFamily.Tinos,
  },
  textInput: {
    height: hp(35),
    borderColor: 'grey',
    borderWidth: 1,
    padding: hp(1.5),
    textAlignVertical: 'top',
    marginTop: hp(1),
    fontSize: FontSize.fs17,
    backgroundColor: 'white',
    color: 'black',
  },
});
