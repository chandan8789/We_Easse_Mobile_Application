import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';
import HeaderHomeScreen from './HeaderHomeScreen';

const YearSelect = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStartYear, setSelectedStartYear] = useState('');
  const [selectedEndYear, setSelectedEndYear] = useState('');

  // Generate a list of years, adjust the range as needed
  const years = Array.from(
    {length: 50},
    (_, index) => `${new Date().getFullYear() - index}`,
  );

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        if (!selectedStartYear) {
          setSelectedStartYear(item);
        } else if (!selectedEndYear) {
          setSelectedEndYear(item);
          setModalVisible(false);
        }
      }}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  const renderButtonText = () => {
    if (selectedStartYear && selectedEndYear) {
      return `${selectedStartYear} - ${selectedEndYear}`;
    } else if (selectedStartYear) {
      return `${selectedStartYear} - Select End Year`;
    } else {
      return 'Select Start Year';
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setModalVisible(true)}>
        <Text style={{color: 'black'}}>{renderButtonText()}</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <FlatList
            data={years}
            renderItem={renderItem}
            keyExtractor={item => item}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  dropdownButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    minWidth: 150,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
});

export default YearSelect;
