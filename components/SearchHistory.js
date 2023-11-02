import { StyleSheet, View, Text, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Word from './Word';

function SearchHistory() {
  return (
    <FlatList>
      <Word />
    </FlatList>
  );
}

export default SearchHistory;

const styles = StyleSheet.create({
  volumeContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  volumeText: {
    fontWeight: 'bold',
  },
});
