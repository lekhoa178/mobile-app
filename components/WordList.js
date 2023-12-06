import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import Title from "./ui/Title";
import WordCard from "./WordCard";
import { useSelector, useDispatch } from "react-redux";
import { searchByWord } from "../service/DictionaryService";
import { useEffect, useState } from "react";
import { searchWord } from "../service/ApiService";

const words = [
  { id: 1, word: "Hello", def: "Hello" },
  { id: 2, word: "Syn", def: "synchornization" },
  { id: 3, word: "Heroine", def: "negative drug" }
];

function WordList() {
  const dispatch = useDispatch();
  const [resultState, setResultState] = useState(words);
  const wordSearch = useSelector(state => state.search.words);
  useEffect(
    () => {
      if (wordSearch.length === 0) {
        setResultState([]);
        return;
      }
      const fetchData = async () => {
        const result = await searchByWord(wordSearch);
        console.log("Result Search: ", result);
        setResultState(result);
      };

      fetchData();
    },
    [wordSearch]
  );
  return (
    <FlatList
      style={styles.container}
      data={resultState}
      keyExtractor={item => item.id}
      renderItem={itemData => WordCard(itemData, dispatch, wordSearch)}
    />
  );
}

export default WordList;

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },

  innerCard: {
    flex: 1
  }
});
