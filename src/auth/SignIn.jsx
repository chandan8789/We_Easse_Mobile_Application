import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../assets/images';
import {hp} from '../assets/commonCSS/GlobalCss';
import CInput from '../componetns/Cinput';
import CommonButton from '../componetns/CommonButton';
import Colors from '../assets/commonCSS/Colors';
import FontSize from '../assets/commonCSS/FontSize';
import {FontFamily} from '../assets/commonCSS/FontFamily';

const SignIn = ({navigation}) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <LinearGradient
      style={{flex: 1, padding: hp(3)}}
      colors={['#FCBACB', '#FFFFFF', '#42F9F9']}
      end={{x: 0, y: 1}}
      start={{x: 0, y: 0}}>
      <View style={styles.container}>
        <Text style={styles.pagesName}>{isSignUp ? 'SIGN UP' : 'SIGN IN'}</Text>
        <Text style={styles.filedName}>Email</Text>
        <CInput
          title="Email"
          secureTextEntry={false}
          fieldsName="Enter Your Email"
          icon={Images.Mails}
        />
        <Text style={styles.filedName}>Password</Text>
        <CInput
          title="Password"
          secureTextEntry={true}
          fieldsName="Enter Your Password"
          icon={Images.Lock}
        />
        <CommonButton
          buttontitle={isSignUp ? 'CREATE ACCOUNT' : 'SIGN IN'}
          onPress={() => navigation.navigate('HomeOne')}
          backgroundColor={isSignUp ? 'yellow' : '#FFF'}
        />
        {/* <CommonButton
          buttontitle={isSignUp ? 'CREATE ACCOUNT' : 'SIGN IN'}
          onPress={() => {
            if (isSignUp) {
              navigation.navigate('');
            } else {
              navigation.navigate('HomeOne');
            }
          }}
          backgroundColor={isSignUp ? 'yellow' : '#FFF'}
        /> */}

        {/* <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>
            {isSignUp ? 'Already have an account? ' : 'No Account? '}
            <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
              <Text style={styles.bottomLinkText}>
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </Text>
            </TouchableOpacity>
          </Text>
          {!isSignUp && (
            <TouchableOpacity
              onPress={() => navigation.navigate('Personalized-Help')}>
              <Text style={[styles.bottomLinkText, {marginTop: hp(1)}]}>
                Reset Password
              </Text>
            </TouchableOpacity>
          )}
        </View> */}

        <View style={styles.bottomTextContainer}>
          <View style={styles.textRow}>
            <Text style={styles.bottomText}>
              {isSignUp ? 'Already have an account? ' : 'No Account? '}
            </Text>
            <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
              <Text style={styles.bottomLinkText}>
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </Text>
            </TouchableOpacity>
          </View>
          {!isSignUp && (
            <TouchableOpacity
              onPress={() => navigation.navigate('Personalized-Help')}>
              <Text style={[styles.bottomLinkText, {marginTop: 10}]}>
                Reset Password
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </LinearGradient>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: hp(2),
    justifyContent: 'center',
  },
  pagesName: {
    fontSize: FontSize.fs30,
    marginBottom: hp(1),
    color: 'black',
    fontFamily: FontFamily.Shojumaru,
  },

  filedName: {
    color: Colors.black,
    fontSize: FontSize.fs18,
    marginTop: hp(2),
    fontFamily: FontFamily.Tinos,
  },
  bottomTextContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 16,
    color: '#000',
  },
  bottomLinkText: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
    fontFamily: FontFamily.Shojumaru,
  },
});
