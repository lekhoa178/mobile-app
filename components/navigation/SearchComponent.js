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
// import styled from 'styled-components/native';
import styled from 'styled-components';
// Tạo một styled component cho SuggestionList
const SuggestionListView = styled.View`
  position: absolute;
  top: 45px; 
  left: 10px;
  right: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  z-index: 1; 
`;
function SearchComponent() {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const handleChangeInput = (text) => {
    setInput(text);
    if(text!= ''){
      setSuggestions([
          { id: 1, word: 'word1' },
          { id: 2, word: 'word2' },
          { id: 3, word: 'word3' },
      ]);
    }
    else {
      setSuggestions([]);
    }
  }

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
        <SuggestionListView>
          <SuggestionList suggestions={suggestions} />
        </SuggestionListView> 
           
        
      )}
    </View>
    
  );
}

export default SearchComponent;

const styles = StyleSheet.create({});
