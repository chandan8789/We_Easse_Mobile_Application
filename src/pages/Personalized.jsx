import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../componetns/Header';
import {hp} from '../assets/commonCSS/GlobalCss';
import CInput from '../componetns/Cinput';
import Images from '../assets/images';
import FontSize from '../assets/commonCSS/FontSize';
import {FontFamily} from '../assets/commonCSS/FontFamily';
import CommonButton from '../componetns/CommonButton';
import SimpleButton from '../componetns/SimpleButton';

const Personalized = ({navigation}) => {
  //   const gotoAdminPage = () => {
  //     navigation.navigate('AdminPage');
  //   };
  return (
    <LinearGradient
      style={{flex: 1, padding: hp(2)}}
      colors={['#FCBACB', '#FFFFFF', '#42F9F9']}
      end={{x: 0, y: 1}}
      start={{x: 0, y: 0}}>
      <Header navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <Text style={styles.pagesName}>Personalized Help</Text>
        <Text style={styles.filedName}>Email</Text>
        <CInput
          title="email-address"
          //   secureTextEntry={true}
          fieldsName="Enter Your Email"
          icon={Images.Lock}
        />
        <Text style={styles.filedName}>Mobile Number</Text>
        <CInput
          //   secureTextEntry={true}
          fieldsName="Enter Your Mobile Number"
          icon={Images.Calls}
          keyboardType="numeric"
        />
        <Text style={styles.filedName}>Description (1-500 words)</Text>
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
    </LinearGradient>
  );
};

export default Personalized;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(5),
  },
  pagesName: {
    fontSize: FontSize.fs30,
    marginBottom: hp(1),
    color: 'black',
    fontFamily: FontFamily.Shojumaru,
  },
  filedName: {
    color: 'black',
    fontSize: FontSize.fs20,
    marginTop: hp(2),
    fontFamily: FontFamily.Tinos,
  },

  textInput: {
    height: hp(35),
    borderColor: 'gray',
    borderWidth: 1,
    padding: hp(1.5),
    textAlignVertical: 'top',
    marginTop: hp(1),
    borderColor: 'black',
    fontSize: FontSize.fs17,
    backgroundColor: 'white',
    color: 'black',
  },
});
