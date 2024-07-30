import Pdf from 'react-native-pdf';

import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const PDFScreen = () => {
  const data = {
    uri: 'https://file-examples.com/storage/fe3f15b9da66a36baa1b51a/2017/10/file-sample_150kB.pdf',
    cache: true,
  };
  return (
    <View style={{flex: 1}}>
      <Pdf
        // source={require('../assets/doc/chanda.pdf')}
        source={data}
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
