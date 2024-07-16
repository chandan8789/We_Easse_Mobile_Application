import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import CategoryCards from '../pages/CategroyCards'; // Corrected typo
import FontSize from '../assets/commonCSS/FontSize';
import {hp, wp} from '../assets/commonCSS/GlobalCss';

const DataHere = () => {
  return (
    <>
      <View>
        <View
          style={{
            borderWidth: hp(0.1),
            height: hp(20),
            marginTop: hp(3),
            elevation: 1,
            paddingLeft: hp(2),
            flexDirection: 'row',
          }}>
          <Text style={{padding: hp(1), color: 'black'}}>UF</Text>
          <Text style={{padding: hp(1), color: 'black'}}>Data</Text>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1721023672487-906b07479bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
            }}
            style={{
              width: wp(20),
              height: hp(10),
              marginLeft: hp(2),
              padding: hp(2),
            }}
          />
        </View>
      </View>
    </>
  );
};

const Categorys = () => {
  const categoryTitles = ['FL', 'ST', 'S&T', 'DL', 'FD', 'AD', 'AS'];
  const categoryTitles1 = ['BW', 'CP', 'PF', 'DA'];
  const categoryTitles2 = ['P', 'PM'];
  const categoryTitles3 = ['TT', 'PD', 'RT', 'CA'];

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: FontSize.fs18,
            fontWeight: '700',
            paddingLeft: hp(2),
          }}>
          Category ST
        </Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {categoryTitles.map((item, index) => (
            <CategoryCards title={item} key={`cat-${index}`} />
          ))}
        </View>
        <DataHere />
      </View>
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: FontSize.fs18,
            fontWeight: '700',
            paddingLeft: hp(2),
            marginTop: hp(2),
          }}>
          Category AT
        </Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {categoryTitles1.map((item, index) => (
            <CategoryCards title={item} key={`cat1-${index}`} />
          ))}
        </View>
        <DataHere />
      </View>
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: FontSize.fs18,
            fontWeight: '700',
            paddingLeft: hp(2),
            marginTop: hp(2),
          }}>
          Category PT
        </Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {categoryTitles2.map((item, index) => (
            <CategoryCards title={item} key={`cat2-${index}`} />
          ))}
        </View>
        <DataHere />
      </View>
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: FontSize.fs18,
            fontWeight: '700',
            paddingLeft: hp(2),
            marginTop: hp(2),
          }}>
          Category FT
        </Text>
        <View
          style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: hp(2)}}>
          {categoryTitles3.map((item, index) => (
            <CategoryCards title={item} key={`cat3-${index}`} />
          ))}
        </View>
        <DataHere />
      </View>
    </View>
  );
};

export default Categorys;

const styles = StyleSheet.create({});
