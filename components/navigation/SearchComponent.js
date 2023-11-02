import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  Dimensions,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState, useEffect } from 'react';

function SearchComponent() {
  const [input, setInput] = useState('');

  return (
    <TextInput
      onChangeText={(input) => setInput(input)}
      placeholder='Nhập từ vựng để tra'
      value={input}
      style={{
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width * 0.75,
        borderRadius: 10,
        padding: 10,
        borderColor: '#7599FF',
      }}
    ></TextInput>
  );
}

export default SearchComponent;

const styles = StyleSheet.create({});
