import {FlatList, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import OptionCard from "./OptionCard";

const AnswerContainer = ({selectHandle}) => {

    const ansWords = useSelector(state => state.lesson.answerSentence);
    console.log("ANS", ansWords)

    return (
        <View style={styles.answerContainer}>
            <View style={styles.lines}/>

            <FlatList contentContainerStyle={{flexDirection : "row", flexWrap : "wrap"}}
                data={ansWords}
                renderItem={itemData => OptionCard(itemData.item, selectHandle, itemData.index, true)}
                keyExtractor={(item, index) => index.toString()}/>
        </View>);
}

export default AnswerContainer;

const styles = StyleSheet.create({
    answerContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginHorizontal: 30,
        paddingBottom: 40,
    },

    lines: {
        position: 'absolute',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        width: '100%',
        height: 60,
        top: 50,
        borderColor: '#BBB'
    }
})