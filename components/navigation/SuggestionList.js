import React from 'react';
import { FlatList,Text } from 'react-native';
import { ListItem } from 'react-native-elements';

function SuggestionList({ suggestions }) {
    // alert(suggestions);
  return (
    <FlatList
      data={suggestions}
      keyExtractor={(item) => item.id}
      renderItem={
        ItemInSuggests
      }
    ></FlatList>
  )
}

function ItemInSuggests({item}) {
    return (
        <Text>{item.word}</Text>
    )
}
export default SuggestionList;
