import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {hp, wp} from '../assets/commonCSS/GlobalCss';
import {useNavigation} from '@react-navigation/native';

const CategoryCards = ({title}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Sub-Category')}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCards;

const styles = StyleSheet.create({
  cardContainer: {
    paddingLeft: hp(2),
    marginTop: hp(2),
  },
  card: {
    height: hp(10),
    width: wp(20),
    justifyContent: 'center',
    borderRadius: hp(1),
    elevation: 5,
    backgroundColor: 'white',
  },
  cardText: {
    textAlign: 'center',
    color: 'black',
  },
});
