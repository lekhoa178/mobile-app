import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native';
import Title from './ui/Title';

const words = [
  { id: 1, word: 'Hello', def: 'hello every body' },
  { id: 2, word: 'Syn', def: 'synchornization' },
  { id: 3, word: 'Heroine', def: 'negative drug' },
];

function renderWordCard(itemData) {
  return (
    <View style={styles.wordCard}>
      <Pressable style={styles.innerCard} android_ripple={{ color: '#444' }}>
        <Title size={25}>{itemData.item.word}</Title>
        <Text>{itemData.item.def}</Text>
      </Pressable>
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
    marginTop: 20,
  },

  wordCard: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#BBB',
    paddingBottom: 20,
  },

  innerCard: {
    flex: 1,
  },
});
