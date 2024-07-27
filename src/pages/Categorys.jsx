// import {StyleSheet, View, Text, Image, ScrollView, Button} from 'react-native';
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Text,
  Dimensions,
  Button,
} from 'react-native';

import React, {useState} from 'react';
import CategoryCards from '../pages/CategroyCards'; // Corrected typo
import FontSize from '../assets/commonCSS/FontSize';
import {hp, wp} from '../assets/commonCSS/GlobalCss';
const {width, height} = Dimensions.get('window');

const DataHere = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleImagePress = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

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
          <TouchableOpacity onPress={handleImagePress}>
            <Image
              source={{
                uri: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg',
              }}
              style={styles.thumbnail}
            />
          </TouchableOpacity>

          <Modal
            visible={isModalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={handleModalClose}>
            <View style={styles.modalContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleModalClose}>
                <Image
                  source={{
                    uri: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg',
                  }}
                  style={styles.fullScreenImage}
                />
              </TouchableOpacity>
            </View>
          </Modal>
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

const styles = StyleSheet.create({
  thumbnail: {
    height: hp(15),
    width: wp(25),
    padding: '2%',
    marginTop: hp(2),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  fullScreenImage: {
    width: width,
    height: height,
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    zIndex: 1,
  },
});
