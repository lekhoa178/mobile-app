import {StyleSheet, View} from "react-native";
import WordList from "../components/WordList";
import React from "react";
import NotebookList from "../components/notebook/NotebookList";

function NotebookScreen() {
    return <View style={styles.container}>
        <NotebookList/>
    </View>;
}

export default NotebookScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})