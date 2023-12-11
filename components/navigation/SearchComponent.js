import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  Dimensions
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import SuggestionList from "./SuggestionList";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setSearchWords, setWords } from "../../context/actions/SearchAction";
import { searchByWord } from "../../service/DictionaryService";

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
  const word = useSelector(state => state.search.words);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [suggestions, setSuggestions] = useState([]);
  const handleChangeInput = function(text) {
    setInput(text);
    dispatch(setWords(text.replaceAll(" ", "_")));
  };
  useEffect(
    () => {
      console.log("word", word);
      setInput(word);
    },
    [word]
  );

  return (
    <View>
      <TextInput
        onChangeText={handleChangeInput}
        placeholder="Nhập từ vựng để tra"
        value={input.replaceAll("_", " ")}
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "blue",
          backgroundColor: "transparent",
          width: Dimensions.get("window").width * 0.75,
          borderRadius: 10,
          padding: 10,
          borderColor: "#7599FF"
        }}
      />
      {suggestions.length > 0 &&
        <SuggestionListView style={{ elevation: 5 }}>
          <SuggestionList suggestions={suggestions} />
        </SuggestionListView>}
    </View>
  );
}

export default SearchComponent;

const styles = StyleSheet.create({});
