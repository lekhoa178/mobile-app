import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import Volume from "../ui/Volume";
import Title from "../ui/Title";
import Heart from "../ui/Heart";

function WordPanel({ word, dispatch}) {
  const [favorite, setFavourite] = useState(false);
  const [wordDisplay, setWordDisplay] = useState("");
  function favor() {
    setFavourite(!favorite);
  }

  return (
    <View style={styles.container}>
      <Title oStyle={{ fontSize: 18 }}>
        {word.replaceAll("_", " ")}
      </Title>
      <View style={styles.utilityContainer}>
        <Volume style={styles.volume} word={word} />
        <Heart word={word} fav={false} dispatch={dispatch}/>
      </View>
    </View>
  );
}

export default WordPanel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: "auto",
    alignItems: "center"
  },

  utilityContainer: {
    flexDirection: "row",
    alignItems: "space-between",
    gap: 10
  },

  flexTitle: {
    flexDirection: "row"
  }
});
