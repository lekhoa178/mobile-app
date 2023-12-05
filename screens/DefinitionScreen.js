import { StyleSheet, View, Text } from 'react-native';
import WordPanel from '../components/definition/WordPanel';
import DefinitionContainer from '../components/definition/DefinitionContainer';
import { useEffect, useState } from 'react';
import { getAllSynset } from '../service/ApiService';
import {getDefinitionModel} from "../service/DictionaryService";
import {useSelector} from "react-redux";

function DefinitionScreen() {
  const wordDetail = useSelector(state => state.search.wordDetail);
  const [wordsDefinition,setWordsDefinition] = useState([]);
  console.log("Word detail: ",wordDetail);
  useEffect(()=> {
    const fetchData = async () => {
      const result = await getDefinitionModel(wordDetail);
      setWordsDefinition(result);
      console.log("Result Definition: ",result);
    };
    fetchData()
  },[]);

  return (
    <View style={styles.container}>
      <WordPanel word={wordDetail} />
      <DefinitionContainer wordsDefinition = {wordsDefinition} />
    </View>
  );
}

export default DefinitionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 30,
    padding: 30,
    backgroundColor: '#fff',
  },
});
