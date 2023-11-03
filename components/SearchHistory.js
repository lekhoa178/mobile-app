import { StyleSheet, View, Text, FlatList } from 'react-native';
import Title from './ui/Title';

const words = [
  { id: 1, word: 'Hello' },
  { id: 2, word: 'Syn' },
  { id: 3, word: 'Heroine' },
];

function renderWordCard(itemData) {
  return (
    <View style={styles.wordCard}>
      <Title size={25}>{itemData.item.word}</Title>
    </View>
  );
}

function SearchHistory() {
  return (
    <FlatList
      style={styles.container}
      data={words}
      keyExtractor={(item) => item.id}
      renderItem={renderWordCard}
    ></FlatList>
  );
}

export default SearchHistory;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },

  wordCard: {
    borderBottomWidth: 1,
    borderBottomColor: '#BBB',
    paddingBottom: 20,
  },
});
