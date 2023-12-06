import { StyleSheet, View, Text } from "react-native";
import WordPanel from "../components/definition/WordPanel";
import DefinitionContainer from "../components/definition/DefinitionContainer";
import { useEffect, useState } from "react";
import { getAllSynset } from "../service/ApiService";
import { getDefinitionModel } from "../service/DictionaryService";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "../RootNavigation";
import { setWords } from "../context/actions/SearchAction";

function DefinitionScreen() {
  const dispatch = useDispatch();
  const wordDetail = useSelector(state => state.search.wordDetail);
  const wordsSearch = useSelector(state => state.search.words);
  const [wordsDefinition, setWordsDefinition] = useState([]);
  // dispatch(setWords(wordDetail));

  console.log("Word detail in definition: ", wordDetail);
  useEffect(
    () => {
      const fetchData = async () => {
        const result = await getDefinitionModel(wordDetail);
        setWordsDefinition(result);
      };
      fetchData();
      if (wordsSearch != wordDetail) {
        navigate("HomeScreen");
      }
    },
    [wordsSearch]
  );

  return (
    <View style={styles.container}>
      <WordPanel word={wordDetail} />
      <DefinitionContainer
        wordsDefinition={wordsDefinition}
        dispatch={dispatch}
      />
    </View>
  );
}

export default DefinitionScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    flex: 1,
    flexDirection: "column",
    gap: 10,
    padding: 30,
    backgroundColor: "#fff"
  }
});
