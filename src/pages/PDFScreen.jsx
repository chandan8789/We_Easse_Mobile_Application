import Pdf from 'react-native-pdf';

import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const PDFScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Pdf
        source={require('../assets/doc/chanda.pdf')}
        trustAllCerts={false}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

export default PDFScreen;

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
