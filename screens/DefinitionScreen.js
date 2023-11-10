import { StyleSheet, View, Text } from 'react-native';
import WordPanel from '../components/definition/WordPanel';
import MeaningPanel from '../components/definition/MeaningPanel';
import { useEffect, useState } from 'react';
import { getAllSynset } from '../service/ApiService';

function DefinitionScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [response, setResponse] = useState();

  // useEffect(() => {
  //   const fetchData = async function () {
  //     try {
  //       const synsets = await getAllSynset();

  //       setIsLoading(false);
  //       setResponse(synsets);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <View style={styles.container}>
      <WordPanel word='hello' />
      <MeaningPanel />
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
