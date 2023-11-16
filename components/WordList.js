import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native';
import Title from './ui/Title';
import WordCard from "./WordCard";

const words = [
  { id: 1, word: 'Hello', def: 'hello every body' },
  { id: 2, word: 'Syn', def: 'synchornization' },
  { id: 3, word: 'Heroine', def: 'negative drug' },
];

function WordList() {
  return (
    <FlatList
      style={styles.container}
      data={words}
      keyExtractor={(item) => item.id}
      renderItem={WordCard}
    ></FlatList>
  );
}

export default WordList;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  innerCard: {
    flex: 1,
  },
});
