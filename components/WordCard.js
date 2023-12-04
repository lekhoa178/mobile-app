import { StyleSheet, View, Text } from "react-native";
import Title from "./ui/Title";

function WordCard(itemData) {
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
    }

    return text;
  }
  return (
    <View style={styles.wordCard}>
      <Title size={25}>
        {itemData.item.word}
      </Title>
      <Text>
        {truncateText(itemData.item.def)}
      </Text>
    </View>
  );
}

export default WordCard;

const styles = StyleSheet.create({
  wordCard: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#BBB",
    paddingBottom: 20
  }
});
