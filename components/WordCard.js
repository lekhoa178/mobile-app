import { StyleSheet, View, Text, Pressable } from "react-native";
import Title from "./ui/Title";
import { setWordDetail } from "../context/actions/SearchAction";
import { navigate } from "../RootNavigation";
import { setWords } from "../context/actions/SearchAction";

function WordCard(itemData, dispatch, wordSearch) {
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
    }
    return text;
  }
  function setWordDetails(text) {
    console.log(text);
    dispatch(setWordDetail(text));
    dispatch(setWords(text));
    navigate("Definition");
  }
  return (
    <Pressable
      style={styles.wordCard}
      onPress={() => setWordDetails(itemData.item.word)}
    >
      <Title oStyle={{ fontSize: 20 }}>
        {itemData.item.word.replaceAll("_", " ")}
      </Title>
      <Text>
        {truncateText(itemData.item.def, 80)}
      </Text>
    </Pressable>
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
