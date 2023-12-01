import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
function LevelCard(itemData, navigation) { 
  function handleNavigation() {
    navigation.navigate("game");
  }

  let levelStyle = !itemData.item.complete ? { backgroundColor: "#ccc" } : {};

  return (
    <Pressable onPress={handleNavigation}>
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
    backgroundColor: "#5bc",
    borderRadius: 15,
    margin: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});
