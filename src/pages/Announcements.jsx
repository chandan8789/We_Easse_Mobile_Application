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

const Announcements = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <YearSelect />
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
