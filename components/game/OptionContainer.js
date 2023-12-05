import {FlatList, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import OptionCard from "./OptionCard";

const OptionContainer = ({selectHandle}) => {
    const optWords = useSelector(state => state.lesson.optionSentence);
    console.log("OPT", optWords)

    return (
        <View style={styles.optionContainer}>
            <FlatList contentContainerStyle={{flexDirection : "row", flexWrap : "wrap"}}
                      data={optWords}
                renderItem={itemData => OptionCard(itemData.item, selectHandle, itemData.index, false)}
                keyExtractor={(item, index) => index.toString()}/>
        </View>);
}

export default OptionContainer;

const styles = StyleSheet.create({
    optionContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 30
    },
})