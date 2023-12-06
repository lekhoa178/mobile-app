import {FlatList, ScrollView, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import OptionCard from "./OptionCard";

const OptionContainer = ({selectHandle}) => {
    const optWords = useSelector(state => state.lesson.optionSentence);

    return (
        <View style={styles.optionContainer}>
            <ScrollView>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {optWords.map((item, index) => (
                        OptionCard(item, selectHandle, index, false)
                    ))}
                </View>
            </ScrollView>
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