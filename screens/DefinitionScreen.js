import { StyleSheet, View, Text } from 'react-native';
import WordPanel from '../components/definition/WordPanel';
import DefinitionContainer from '../components/definition/DefinitionContainer';
import { useEffect, useState } from 'react';
import { getAllSynset } from '../service/ApiService';
import {useSelector} from "react-redux";

function DefinitionScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [response, setResponse] = useState();
  const wordDetail = useSelector(state => state.search.wordDetail);
  console.log("Word detail: ",wordDetail);

  return (
    <View style={styles.container}>
      <WordPanel word='hello' />
      <DefinitionContainer />
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
