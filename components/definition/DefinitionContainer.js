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

function DefinitionContainer({wordsDefinition}) {
    console.log("Words definition: ",wordsDefinition);
  return (

    <ScrollView contentContainerStyle={styles.definitionContainer}>
        {Object.keys(wordsDefinition).map( key => (
          <View style = {styles.partofSpeechTitle} size={20}>
            <Text style={styles.textKey}>{key}</Text>
            <DefinitionBody wordsDefinition={wordsDefinition[key]}/>
          </View>
        ))}
    </ScrollView>

  );
}

export default DefinitionContainer;

const styles = StyleSheet.create({
  definitionContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    alignItems:"center"
  },
  textKey: {
    fontSize:25,
    fontWeight:"bold"
  }
});
