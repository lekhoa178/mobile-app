import {FlatList, ScrollView, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import OptionCard from "./OptionCard";

const AnswerContainer = ({selectHandle}) => {

    const ansWords = useSelector(state => state.lesson.answerSentence);

    return (
        <View style={styles.answerContainer}>
            <View style={styles.lines}/>

            <ScrollView>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {ansWords.map((item, index) => (
                        OptionCard(item, selectHandle, index, true)
                    ))}
                </View>
            </ScrollView>
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