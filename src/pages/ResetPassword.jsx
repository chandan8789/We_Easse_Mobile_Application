import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
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

const ResetPassword = ({navigation}) => {
  return (
    // <LinearGradient
    //   style={{flex: 1, padding: hp(2)}}
    //   colors={['#FCBACB', '#FFFFFF', '#42F9F9']}
    //   end={{x: 0, y: 1}}
    //   start={{x: 0, y: 0}}>
    <>
      <ImageBackground
        source={require('../assets/images/webg.jpg')}
        style={styles.background}>
        <Header navigation={navigation} />
        <SafeAreaView style={styles.container}>
          <Text
            style={{
              fontSize: FontSize.fs22,
              color: 'black',
              fontWeight: '700',
            }}>
            Forgot Password!
          </Text>
          <Text style={styles.filedName}>Email</Text>
          <CInput
            title="email-address"
            fieldsName="Enter Your Email"
            icon={Images.Mails}
            textContentType="emailAddress"
          />
          <Text style={styles.filedName}>Old Password</Text>
          <CInput fieldsName="Enter Your Old Password" icon={Images.Lock} />

          <Text style={styles.filedName}>New Password</Text>
          <CInput fieldsName="Enter Your New Password" icon={Images.Lock} />

          {/* <Text style={styles.filedName}>Mobile Number</Text>
          <View style={styles.inputContainer}>
            <Image source={Images.Calls} style={styles.icon} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Your Mobile Number"
              placeholderTextColor="grey"
              keyboardType="numeric"
            />
          </View> */}
          {/* <SimpleButton
            btnTitle="Submit"
            onPress={() => navigation.navigate('SignUp')}
          /> */}
          <CommonButton
            buttontitle="Submit"
            onPress={() => navigation.navigate('SignUp')}
          />
        </SafeAreaView>
      </ImageBackground>
    </>
    // </LinearGradient>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  pagesName: {
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

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: hp(0.2),
    borderRadius: hp(1.5),
    elevation: 4,
    backgroundColor: 'white',
    paddingLeft: hp(1),
  },
  icon: {
    width: hp(2.5),
    height: hp(2.5),
    objectFit: 'contain',
  },
  textInput: {
    flex: 1,
    height: hp(6),
    paddingLeft: hp(3),
  },
});
