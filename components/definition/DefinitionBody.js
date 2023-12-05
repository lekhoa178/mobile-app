import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native';

function renderDefItem(itemData) {
  return (
    <View style={styles.definitionItem}>
        <Text style = {styles.definition}>{itemData.item.definition}</Text>
        <View style={styles.innerContainerItem}>
          {itemData.item.examples.map((example , index) => {
                  return <Text key ={index} style={styles.definitionText}>{example}</Text>;
          })}
        </View>
        <View style={styles.innerContainerItem}>
          {itemData.item.synonyms.map((synonym,index) => (
              <Text key={index} style={styles.definitionText}>{synonym}</Text>
          ))}
        </View>
    </View>
  );
}

function DefinitionBody({ wordsDefinition }) {
  return (
        <FlatList
          data={wordsDefinition}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderDefItem}
        ></FlatList>
  );
}

export default DefinitionBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  definition: {
    paddingVertical:15,
    backgroundColor:"#dcdcdc",
    fontSize:20,
    fontWeight:"bold"
  },

  definitionItem: {
    borderRadius: 10,
    marginBottom: 10,
  },

  definitionText: {
    fontSize: 17,
    fontWeight: '300',
    paddingVertical:10,
    borderBottomWidth:0.5,
  },

  innerContainerItem: {

  },

  button: {
    flex: 1,
  },
});
