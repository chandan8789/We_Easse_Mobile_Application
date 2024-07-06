import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {hp} from '../assets/commonCSS/GlobalCss';
import {FontFamily} from '../assets/commonCSS/FontFamily';
import FontSize from '../assets/commonCSS/FontSize';

const CustomDropdown = ({category, titlecat}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select an option');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.fieldName}>{titlecat}</Text>
      <TouchableOpacity style={styles.header} onPress={toggleDropdown}>
        <Text style={styles.headerText}>{selectedOption}</Text>
        <Image
          source={
            isOpen
              ? require('../assets/images/toparrow.png')
              : require('../assets/images/toparrow.png')
          }
          style={styles.arrowIcon}
        />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdownContent}>
          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => handleOptionSelect('Option 1')}>
            <Text style={{color: 'black'}}>Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => handleOptionSelect('Option 2')}>
            <Text style={{color: 'black'}}>Option 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => handleOptionSelect('Option 3')}>
            <Text style={{color: 'black'}}>Option 3</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: hp(1.5),
    width: '100%',
    borderWidth: hp(0.2),
    borderRadius: hp(1),
    marginTop: hp(1),
    elevation: 10,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: FontSize.fs16,
  },
  arrowIcon: {
    width: hp(2),
    height: hp(3),
    resizeMode: 'contain',
  },
  dropdownContent: {
    width: '100%',
    backgroundColor: '#ffffff',
    elevation: 5,
    marginTop: hp(1),
  },
  optionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  fieldName: {
    color: 'black',
    fontSize: FontSize.fs20,
    marginTop: hp(2),
    fontFamily: FontFamily.Tinos,
  },
});

export default CustomDropdown;
