import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native';
import NotebookWord from "./NotebookWord";
import {useDispatch} from "react-redux";

function NotebookList({notebookList}) {
    const dispatch = useDispatch();

    return (
        <FlatList
            style={styles.container}
            data={notebookList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(itemData) => NotebookWord(itemData, dispatch)}
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
