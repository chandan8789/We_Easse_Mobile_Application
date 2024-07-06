import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../componetns/Header';
import LinearGradient from 'react-native-linear-gradient';
import {hp} from '../assets/commonCSS/GlobalCss';
import CustomDropdown from '../componetns/CustomDropdown';
import FontSize from '../assets/commonCSS/FontSize';
import {FontFamily} from '../assets/commonCSS/FontFamily';
import CInput from '../componetns/Cinput';
import CommonButton from '../componetns/CommonButton';
import SimpleButton from '../componetns/SimpleButton';

const AdminPage = ({navigation}) => {
  return (
    <LinearGradient
      style={{flex: 1, padding: hp(2)}}
      colors={['#FCBACB', '#FFFFFF', '#42F9F9']}
      end={{x: 0, y: 1}}
      start={{x: 0, y: 0}}>
      <Header navigation={navigation} />
      <View style={{marginTop: hp(12)}}>
        <Text style={styles.pagesName}>Admin Page</Text>
      </View>
      <CustomDropdown category="Category" titlecat="Category" />
      <CustomDropdown category="Sub-Category" titlecat="Sub-Category" />
      <Text
        style={{
          fontFamily: FontFamily.Tinos,
          color: 'black',
          fontSize: FontSize.fs18,
          marginTop: hp(1.5),
        }}>
        Narration
      </Text>
      <CInput
        title="Email"
        secureTextEntry={false}
        fieldsName="Enter Your Narration"
      />

      <View style={{marginTop: hp(2)}}>
        <SimpleButton btnTitle="Upload" />
      </View>
    </LinearGradient>
  );
};

export default AdminPage;

const styles = StyleSheet.create({
  pagesName: {
    fontSize: FontSize.fs30,
    marginBottom: hp(1),
    color: 'black',
    fontFamily: FontFamily.Shojumaru,
  },
});
