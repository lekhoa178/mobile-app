import React from 'react';
import { FlatList, Text, StyleSheet, Pressable } from 'react-native';
import { ListItem } from 'react-native-elements';
import { navigate } from "../../RootNavigation";

function ItemInSuggests(itemData) {
  function handleNavi() {
    navigate('Definition');
  }

  return (
    <Pressable
      onPress={handleNavi}
      style={styles.button}
      android_ripple={{ color: '#ccc' }}
    >
      <Text style={styles.wordItem}>{itemData.item.replaceAll('_', ' ')}</Text>
    </Pressable>
  );
}

function SuggestionList({ suggestions }) {
  // alert(suggestions);
  return (
    <FlatList
      data={suggestions}
      keyExtractor={(item) => item}
      renderItem={ItemInSuggests}
    ></FlatList>
  );
}

export default SuggestionList;

const styles = StyleSheet.create({
  button: {
    padding: 5,
  },

  wordItem: {
    marginVertical: 5,
    paddingHorizontal: 10,
    fontSize: 17,
  },
});
