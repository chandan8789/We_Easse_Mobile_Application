import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const PDFScreen = () => {
  const pdfUri =
    'https://gurugramuniversity.ac.in/Notice/Document%20Fri_Jul_26_16_42_39.pdf';

  return (
    <View style={styles.container}>
      <WebView source={{uri: pdfUri}} style={styles.webview} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    flex: 1,
    width: '100%',
  },
});

export default PDFScreen;
