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
import SuggestionList from './SuggestionList';
import styled from 'styled-components';
import { searchWord } from '../../service/ApiService';
// import styled from 'styled-components/native';

const SuggestionListView = styled.View`
  position: absolute;
  top: 50px;
  width: 100%;
  background-color: #fff;
  border-radius: 0 0 15px 15px;
  padding-top: 15px;
  z-index: 0;
`;
function SearchComponent() {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const handleChangeInput = async function (text) {
    setInput(text);
    if (text !== '') {
      const words = await searchWord(text);
      setSuggestions(words);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <View>
      <TextInput
        onChangeText={handleChangeInput}
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
      {suggestions.length > 0 && (
        <SuggestionListView style={{ elevation: 5 }}>
          <SuggestionList suggestions={suggestions} />
        </SuggestionListView>
      )}
    </View>
  );
}

export default SearchComponent;

const styles = StyleSheet.create({});
