import {StyleSheet, Text, View} from "react-native";
import React from "react";

const AnswerContainer = () => {
    return (
        <View style={styles.answerContainer}>
            <View style={styles.lines}>

            </View>

            <Text style={styles.optionCard}>hdsa</Text>
            <Text style={styles.optionCard}>hdsa</Text>
            <Text style={styles.optionCard}>hdsa</Text>
            <Text style={styles.optionCard}>hdsa</Text>
            <Text style={styles.optionCard}>hdsa</Text>
            <Text style={styles.optionCard}>hdsa</Text>
            <Text style={styles.optionCard}>hdsa</Text>
            <Text style={styles.optionCard}>hdsa</Text>
            <Text style={styles.optionCard}>hdsa</Text>
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

    optionCard: {
        borderRadius: 15,
        borderColor: '#CCC',
        borderWidth: 1,
        padding: 10,
        fontSize: 17,
        marginBottom: 10,
        marginHorizontal: 3,
        borderBottomWidth: 4,
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