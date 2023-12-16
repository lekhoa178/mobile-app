import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "../../RootNavigation";
import { setCorrectAnswer, setId } from "../../context/actions/LessonAction";

function LevelCard(itemData, stageId, dispatch) {
  function handleNavigation(stageId, levelId, complete) {
    dispatch(setId({ stageId, levelId }));
    dispatch(setCorrectAnswer(0));
    navigate("game");
  }

  let levelStyle = !itemData.item.complete ? { backgroundColor: "#ccc" } : {};

  return (
    <Pressable onPress={() => handleNavigation(stageId, itemData.item.levelId, itemData.item.complete)}>
      <View style={[styles.levelCard, levelStyle]}>
        <Text>
          Cửa {itemData.index + 1}
        </Text>
      </View>
    </Pressable>
  );
}

export default LevelCard;

const styles = StyleSheet.create({
  levelCard: {
    elevation: 5,
    height: 85,
    padding: 20,
    width: 85,
    marginVertical: 5,
    backgroundColor: "#2debef",
    borderRadius: 15,
    margin: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});
