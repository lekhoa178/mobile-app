import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import Title from "./ui/Title";
import WordCard from "./WordCard";
import { useSelector } from "react-redux";
import { searchByWord } from "../service/DictionaryService";
import { useEffect } from "react";
const words = [
  { id: 1, word: "Hello", def: "hello every body" },
  { id: 2, word: "Syn", def: "synchornization" },
  { id: 3, word: "Heroine", def: "negative drug" }
];

function WordList() {
  const wordSearch = useSelector(state => state.search.words);
  console.log("wordSearch", wordSearch);
  return (
    <FlatList
      style={styles.container}
      data={words}
      keyExtractor={item => item.id}
      renderItem={WordCard}
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
