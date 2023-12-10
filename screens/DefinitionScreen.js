import {StyleSheet, View, Text, ScrollView} from "react-native";
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

  useEffect(
    () => {
      const fetchData = async () => {
        const result = await getDefinitionModel(wordDetail);
        setWordsDefinition(result);
      };
      fetchData();
      if (wordsSearch !== wordDetail) {
        navigate("HomeScreen");
      }
    },
    [wordsSearch]
  );

  if (wordsDefinition.length === 0)
      return <></>;

  return (
      <ScrollView>
          <View style={styles.container}>
              <WordPanel word={wordDetail} def={wordsDefinition[Object.keys(wordsDefinition)[0]][0].definition} dispatch={dispatch}/>
              <DefinitionContainer
                  wordsDefinition={wordsDefinition}
                  dispatch={dispatch}
              />
          </View>
      </ScrollView>

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
