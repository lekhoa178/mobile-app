import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native';
import NotebookWord from "./NotebookWord";

const words = [
    { id: 1, word: 'Hello', def: 'hello every body' },
    { id: 2, word: 'Syn', def: 'synchornization' },
    { id: 3, word: 'Heroine', def: 'negative drug' },
];

function NotebookList({notebookList}) {
    return (
        <FlatList
            style={styles.container}
            data={notebookList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={NotebookWord}
        ></FlatList>
    );
}

export default NotebookList;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingLeft:20,
        marginRight:20
    },

    innerCard: {
        flex: 1,
    },
});
