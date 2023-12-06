import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";
import DefinitionBody from "./DefinitionBody";
import BorderTitle from "../ui/BorderTitle";
import { useState } from "react";
import { useEffect } from "react";

function DefinitionContainer({ wordsDefinition, dispatch }) {
  const [listDefinitions, setListDefinition] = useState([]);
  useEffect(
    () => {
      let listRs = [];
      Object.entries(wordsDefinition).map(([key, value]) => {
        let obj = { key, value };
        listRs.push(obj);
      });
      setListDefinition(listRs);
    },
    [wordsDefinition]
  );
  return (
    <FlatList
      data={listDefinitions}
      keyExtractor={(item, index) => index.toString()}
      renderItem={itemData => renderTypeWords(itemData, dispatch)}
    />
  );
}

function renderTypeWords(item, dispatch) {
  return (
    <View>
      <BorderTitle styleTrans={styles.textKey}>
        {item.item.key}
      </BorderTitle>
      <DefinitionBody wordsDefinition={item.item.value} dispatch={dispatch} />
    </View>
  );
}
export default DefinitionContainer;

const styles = StyleSheet.create({
  definitionContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    alignItems: "center"
  },
  backGroundKey: {},
  textKey: {
    fontSize: 23,
    fontWeight: "bold",
    backgroundColor: "#1b75d0",
    color: "#fff"
  }
});
