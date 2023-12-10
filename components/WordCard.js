import { StyleSheet, View, Text, Pressable } from "react-native";
import Title from "./ui/Title";
import { setWordDetail } from "../context/actions/SearchAction";
import { navigate } from "../RootNavigation";
import { setWords } from "../context/actions/SearchAction";
import {addResearch} from "../context/actions/ResearchAction";
import {updateResearch} from "../service/ApiService";
import {getAccountId} from "../helpers";

function WordCard(itemData, dispatch) {
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
    }
    return text;
  }
  async function setWordDetails(text) {
    dispatch(setWordDetail(text));
    dispatch(setWords(text));

    await updateResearch(text, true, await getAccountId());
    navigate("Definition");
  }

  return (
    <Pressable
      style={styles.wordCard}
      onPress={async () => await setWordDetails(itemData.item.lexicon.word)}
    >
      <Title oStyle={{ fontSize: 20 }}>
        {itemData.item.lexicon.word.replaceAll('_', ' ')}
      </Title>
      <Text>
        {truncateText(itemData.item.lexicon.definition, 80)}
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
