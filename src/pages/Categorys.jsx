import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {hp, wp} from '../assets/commonCSS/GlobalCss';

const CategroysCards = () => {
  return (
    <>
      <TouchableOpacity>
        <View style={{paddingLeft: hp(2), marginTop: hp(2)}}>
          <View
            style={{
              height: hp(13),
              width: wp(26),
              justifyContent: 'center',
              borderRadius: hp(1),
              elevation: 5,
              backgroundColor: 'white',
            }}>
            <Text style={{textAlign: 'center'}}>Categories</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const Categorys = () => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      <CategroysCards />
      <CategroysCards />
      <CategroysCards />
      <CategroysCards />
      <CategroysCards />
      <CategroysCards />
    </View>
  );
};

export default Categorys;

const styles = StyleSheet.create({});
