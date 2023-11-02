import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native';

function renderDefItem(itemData) {
  return (
    <View style={styles.definitionItem}>
      <Pressable android_ripple={{ color: '#BBB' }} style={styles.button}>
        <View style={styles.innerContainerItem}>
          <Text style={styles.definitionText}>{itemData.item.definition}</Text>
        </View>
      </Pressable>
    </View>
  );
}

function DefinitionBody({ data }) {
  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={(item) => item.id}
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

  definitionItem: {
    borderBottomWidth: 0.5,
    borderRadius: 10,
    marginBottom: 10,
  },

  definitionText: {
    fontSize: 17,
    fontWeight: '300',
  },

  innerContainerItem: {
    flex: 1,
    padding: 20,
  },

  button: {
    flex: 1,
  },
});
