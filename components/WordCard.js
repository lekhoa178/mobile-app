import {StyleSheet, View, Text, Pressable} from "react-native";
import Title from "./ui/Title";
import {setWordDetail} from "../context/actions/SearchAction";
import {navigate} from "../RootNavigation";

function WordCard(itemData,dispatch) {
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
    }
    return text;
  }
  function setWordDetails(text){
      console.log(text);
      dispatch(setWordDetail(text));
      navigate("Definition");
  }
  return (
    <Pressable style={styles.wordCard} onPress={()=> setWordDetails(itemData.item.word)}>
      <Title oStyle={{ fontSize: 20 }}>
        {itemData.item.word}
      </Title>
      <Text>
        {truncateText(itemData.item.def,80)}
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
