import { StyleSheet, View, Text, ScrollView } from 'react-native';
import DefinitionBody from './DefinitionBody';
import BorderTitle from '../ui/BorderTitle';

const definitions = [
  { id: 1, definition: 'Meaning 1' },
  { id: 2, definition: 'Meaning 2' },
  {
    id: 3,
    definition: 'Meaningfdgggg 3',
  },
];

function DefinitionContainer() {
  return (
    // <ScrollView>
    <View style={styles.definitionContainer}>
      <BorderTitle style={styles.partofSpeechTitle} size={20}>
        Danh từ
      </BorderTitle>
      <DefinitionBody data={definitions} />
      <BorderTitle style={styles.partofSpeechTitle} size={20}>
        Danh từ
      </BorderTitle>
      <DefinitionBody data={definitions} />
    </View>
    // </ScrollView>
  );
}

export default DefinitionContainer;

const styles = StyleSheet.create({
  definitionContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 20,
  },
});
