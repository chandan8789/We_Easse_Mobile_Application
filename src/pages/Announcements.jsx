import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import YearSelect from '../componetns/YearSelect';
import {hp} from '../assets/commonCSS/GlobalCss';
import Cards from '../componetns/Cards';
import Header from '../componetns/Header';

const Announcements = ({navigation}) => {
  return (
    <ScrollView>
      <ImageBackground
        source={require('../assets/images/webg.jpg')}
        style={{padding: hp(2)}}>
        <Header navigation={navigation} />
        <View style={styles.container}>
          {/* <YearSelect /> */}
          <Cards
            date="15, Jun-2024 04:20 PM"
            content="ARCA GIIS: Punctuality in Boarding School Buses"
            notification="(Notification)"
            more="View More >>"
          />
          <Cards
            date="15, Jun-2024 04:20 PM"
            content="ARCA GIIS: Punctuality in Boarding School Buses"
            notification="(Notification)"
            more="View More >>"
          />
          <Cards
            date="15, Jun-2024 04:20 PM"
            content="ARCA GIIS: Punctuality in Boarding School Buses"
            notification="(Notification)"
            more="View More >>"
          />
          <Cards
            date="15, Jun-2024 04:20 PM"
            content="ARCA GIIS: Punctuality in Boarding School Buses"
            notification="(Notification)"
            more="View More >>"
          />
          <Cards
            date="15, Jun-2024 04:20 PM"
            content="ARCA GIIS: Punctuality in Boarding School Buses"
            notification="(Notification)"
            more="View More >>"
          />
          <Cards
            date="15, Jun-2024 04:20 PM"
            content="ARCA GIIS: Punctuality in Boarding School Buses"
            notification="(Notification)"
            more="View More >>"
          />
          <Cards
            date="15, Jun-2024 04:20 PM"
            content="ARCA GIIS: Punctuality in Boarding School Buses"
            notification="(Notification)"
            more="View More >>"
          />
          <Cards
            date="15, Jun-2024 04:20 PM"
            content="ARCA GIIS: Punctuality in Boarding School Buses"
            notification="(Notification)"
            more="View More >>"
          />
          <Cards
            date="15, Jun-2024 04:20 PM"
            content="ARCA GIIS: Punctuality in Boarding School Buses"
            notification="(Notification)"
            more="View More >>"
          />
          <Cards
            date="15, Jun-2024 04:20 PM"
            content="ARCA GIIS: Punctuality in Boarding School Buses"
            notification="(Notification)"
            more="View More >>"
          />
          <Cards
            date="15, Jun-2024 04:20 PM"
            content="ARCA GIIS: Punctuality in Boarding School Buses"
            notification="(Notification)"
            more="View More >>"
          />
          <Cards
            date="15, Jun-2024 04:20 PM"
            content="ARCA GIIS: Punctuality in Boarding School Buses"
            notification="(Notification)"
            more="View More >>"
          />
          <Cards
            date="15, Jun-2024 04:20 PM"
            content="ARCA GIIS: Punctuality in Boarding School Buses"
            notification="(Notification)"
            more="View More >>"
          />
          <Cards
            date="15, Jun-2024 04:20 PM"
            content="ARCA GIIS: Punctuality in Boarding School Buses"
            notification="(Notification)"
            more="View More >>"
          />
          <Cards
            date="15, Jun-2024 04:20 PM"
            content="ARCA GIIS: Punctuality in Boarding School Buses"
            notification="(Notification)"
            more="View More >>"
          />
          <Cards
            date="15, Jun-2024 04:20 PM"
            content="ARCA GIIS: Punctuality in Boarding School Buses"
            notification="(Notification)"
            more="View More >>"
          />
          <Cards
            date="15, Jun-2024 04:20 PM"
            content="ARCA GIIS: Punctuality in Boarding School Buses"
            notification="(Notification)"
            more="View More >>"
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: hp(2),
  },
});

export default Announcements;
