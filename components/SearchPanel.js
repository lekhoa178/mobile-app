import React, { Component } from 'react';
import { View, TextInput, FlatList, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

class SearchPanel extends Component {
  state = {
    searchText: '',
    searchResults: [],
  };

  handleSearch = (text) => {
    // Implement your search logic here and update searchResults state.
    // You can use an API, local data, or any other method to fetch results.
  };

  render() {
    return (
      <View style={{ flexDirection: 'row', marginBottom: 15 }}>
        <TextInput
          style={{
            height: 40,
            borderColor: '#000',
            borderWidth: 1,
            borderRadius: 15,
            padding: 10,
            backgroundColor: '#fff',
            flex: 1,
            marginRight: 5,
          }}
          placeholder='Search for '
        />
        <TouchableOpacity
          title='SEARCH'
          style={styles.buttonSubmit}
          onPress={this.handleSearch}
        >
          <FontAwesome5 name='microphone-alt' size={25} color='black' />
        </TouchableOpacity>
      </View>
    );
  }
}

export default SearchPanel;

const styles = StyleSheet.create({
  buttonSubmit: {
    borderRadius: 15,
    paddingHorizontal: 20,
    // backgroundColor: '#7599FF',
    paddingTop: 5,
    alignItems: 'center',
  },
});
