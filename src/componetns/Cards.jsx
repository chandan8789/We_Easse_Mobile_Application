import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {hp, wp} from '../assets/commonCSS/GlobalCss';

const Cards = ({content, notification, more, date}) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <Text style={{color: 'black', fontWeight: '700', marginTop: hp(1)}}>
          {content}
        </Text>
        <Text style={{color: 'grey', fontStyle: 'italic'}}>{notification}</Text>
        <TouchableOpacity>
          <Text style={{color: 'blue', textAlign: 'right', marginTop: hp(2)}}>
            {more}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  main: {
    height: hp(12),
    elevation: 3,
    backgroundColor: 'white',
    marginTop: hp(2),
    padding: hp(1),
    borderRadius: hp(0.5),
    textAlign: 'right',
  },
  dateContainer: {
    height: hp(2.5),
    width: hp(20),
    paddingVertical: hp(0.2),
    backgroundColor: 'blue',
    elevation: 3,
    backgroundColor: 'blue',
    alignSelf: 'flex-end',
    position: 'absolute',
    marginTop: hp(-1.2),
  },

  dateText: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'right',
    paddingHorizontal: hp(0.5),
  },
});
