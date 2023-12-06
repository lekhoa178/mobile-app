import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
  ScrollView
} from "react-native";
import { navigate } from "../../RootNavigation";
import { setWordDetail, setWords } from "../../context/actions/SearchAction";
function navigateSyn(text, dispatch) {}
function renderDefItem(itemData, dispatch) {
  return (
    <View style={styles.definitionItem} key={itemData.definition}>
      <Text style={styles.definition}>
        {itemData.definition}
      </Text>
      <View style={styles.innerContainerItem}>
        {itemData.examples.map((example, index) => {
          return (
            <Text key={index} style={styles.definitionText}>
              EX:
              {example}
            </Text>
          );
        })}
      </View>
      {itemData.synonyms.length > 0 &&
        <View>
          <Text style={styles.synonyms}>Synonyms:</Text>
          {itemData.synonyms.map((synonym, index) =>
            <Text
              key={index}
              style={styles.definitionSyn}
              onPress={navigateSyn(synonym, dispatch)}
            >
              {synonym}
            </Text>
          )}
        </View>}
    </View>
  );
}

function DefinitionBody({ wordsDefinition, dispatch }) {
  return (
    // <FlatList
    //   data={wordsDefinition}
    //   keyExtractor={(item, index) => index.toString()}
    //   renderItem={renderDefItem}
    // ></FlatList>

    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        borderBottomWidth: 0.5,
        borderBottomColor: "#666"
      }}
    >
      {wordsDefinition.map((item, index) => renderDefItem(item, dispatch))}
    </View>
  );
}

export default DefinitionBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  definition: {
    paddingVertical: 15,
    fontSize: 20,
    fontWeight: "bold"
  },

  definitionItem: {
    borderRadius: 10,
    marginBottom: 10,
    borderBottomWidth: 0.5,
    paddingBottom: 10
  },
  synonyms: {
    fontWeight: "bold",
    fontSize: 15
  },

  definitionText: {
    fontSize: 17,
    fontWeight: "300",
    paddingVertical: 10
  },
  definitionSyn: {
    fontSize: 17,
    fontWeight: "300",
    paddingVertical: 10,
    color: "#0078ff",
    textDecorationLine: "underline"
  },

  innerContainerItem: {},

  button: {
    flex: 1
  }
});
