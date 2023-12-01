import { StyleSheet, View } from "react-native";
import WordList from "../components/WordList";
import React from "react";
import NotebookList from "../components/notebook/NotebookList";
import { useSelector } from "react-redux";

function NotebookScreen() {
  let dataWord = useSelector(state => state.search.words);
  console.log("dataWord", dataWord);
  return (
    <View style={styles.container}>
      <NotebookList />
    </View>
  );
}

export default NotebookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
