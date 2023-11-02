import { StyleSheet, View, Text } from 'react-native';
import WordPanel from '../components/definition/WordPanel';
import MeaningPanel from '../components/definition/MeaningPanel';

function DefinitionScreen() {
  return (
    <View style={styles.container}>
      <WordPanel />
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
