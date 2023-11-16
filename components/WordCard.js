import { StyleSheet, View, Text } from 'react-native';
import Title from "./ui/Title";

function WordCard(itemData) {
  return (
      <View style={styles.wordCard}>
        <Title size={25}>{itemData.item.word}</Title>
        <Text>{itemData.item.def}</Text>
      </View>
  );
}

export default WordCard;

const styles = StyleSheet.create({
  wordCard: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#BBB',
    paddingBottom: 20,
  },
})