import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import Volume from "../ui/Volume";
import Title from "../ui/Title";
import Heart from "../ui/Heart";
import {Notebook} from "../../models/Notebook";
import {getAccountId} from "../../helpers";
import {Lexicon} from "../../models/Lexicon";

function WordPanel({ word, def, dispatch}) {
  const [notebookModel, setNotebookModel] = useState({});

  useEffect(() => {

    const fetchNotebook = async () => {
      const model = new Notebook(await getAccountId(), new Lexicon(0, 0, word, def));
      setNotebookModel(model);
    }

    fetchNotebook();

  }, [word]);


  return (
    <View style={styles.container}>
      <Title oStyle={{ fontSize: 18 }}>
        {word.replaceAll("_", " ")}
      </Title>
      <View style={styles.utilityContainer}>
        <Volume style={styles.volume} word={word.replaceAll('_', ' ')} />
        <Heart notebook={notebookModel} fav={false} dispatch={dispatch}/>
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
