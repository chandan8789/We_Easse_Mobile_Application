import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '../assets/commonCSS/GlobalCss';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const DataHere = ({showButton}) => {
  const navigation = useNavigation();

  return (
    <>
      {showButton && (
        <View style={{marginTop: hp(1)}}>
          <Button
            title="Open PDF"
            onPress={() =>
              navigation.navigate('Pdf', {
                uri: 'https://gurugramuniversity.ac.in/Notice/Document%20Fri_Jul_26_16_42_39.pdf',
              })
            }
          />
        </View>
      )}
    </>
  );
};

const Cards = ({content, notification, more, date}) => {
  const [showButton, setShowButton] = useState(false);

  const handleMorePress = () => {
    setShowButton(!showButton);
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={{color: 'black', fontWeight: '700', marginTop: hp(1)}}>
          {content}
        </Text>
        <Text style={{color: 'grey', fontStyle: 'italic'}}>{notification}</Text>
        <TouchableOpacity onPress={handleMorePress}>
          <Text style={{color: 'blue', textAlign: 'right', marginTop: hp(2)}}>
            {more}
          </Text>
        </TouchableOpacity>
        <DataHere showButton={showButton} />
      </View>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(2), // Add some space between cards
  },
  main: {
    elevation: 3,
    backgroundColor: 'white',
    marginTop: hp(1.5),
    padding: hp(1),
    borderRadius: hp(0.5),
    textAlign: 'right',
    // Removed fixed height
  },
  dateContainer: {
    height: hp(2.5),
    width: hp(20),
    paddingVertical: hp(0.2),
    backgroundColor: 'blue',
    elevation: 3,
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
  pdf: {
    flex: 1,
    width: '100%',
    height: '80%',
  },
});
