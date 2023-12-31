import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import ListItem from '../../components/ListItem';
import results from '../../components/results';
// import { DrawerContent } from '@react-navigation/drawer';

export default function Amigos() {
  const [searchText, setSearchText] = useState('');
  const [filteredResults, setFilteredResults] = useState(results);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigation = useNavigation();

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const searchNames = (text) => {
    const filteredList = results.filter(
      (item) =>
        item.name.toLowerCase().indexOf(text.toLowerCase()) > -1
    );
    setFilteredResults(filteredList);
  };

  useEffect(() => {
    if (isSearchOpen) {
      searchNames(searchText);
    } else {
      setFilteredResults(results);
    }
  }, [searchText, isSearchOpen]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('MenuAmigos')}>
          <MaterialCommunityIcons name="menu" size={wp('8%')} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Amigos</Text>
        <TouchableOpacity onPress={handleSearchIconClick}>
          <MaterialCommunityIcons
            name={isSearchOpen ? 'close' : 'magnify'}
            size={wp('8%')}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>

      {isSearchOpen && (
        <TextInput
          style={styles.input}
          placeholder="Pesquise uma pessoa"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
      )}

      <FlatList
        data={filteredResults}
        style={styles.list}
        renderItem={({ item }) => <ListItem data={item} />}
        keyExtractor={(item) => item.id}
      />

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D2254',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp('2%'), 
    paddingVertical: wp('8%'),
    backgroundColor: '#272E72',
  },
  headerTitle: {
    fontSize: wp('6%'), 
    color: '#FFFFFF',
  },
  input: {
    height: hp('7%'), 
    backgroundColor: '#363636',
    borderRadius: 5,
    fontSize: wp('4%'), 
    paddingLeft: wp('4%'), 
    paddingRight: wp('4%'), 
    color: '#FFFFFF',
    margin: wp('2%'), 
  },
  list: {
    flex: 1,
    margin: wp('2%'), 
  },
});
