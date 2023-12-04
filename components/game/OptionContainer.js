import {StyleSheet, Text, View} from "react-native";
import React from "react";

const OptionContainer = () => {
    return (
        <View style={styles.optionContainer}>
            <Text style={styles.optionCard}>hdsa</Text>
            <Text style={styles.optionCard}>hdsa</Text>
            <Text style={styles.optionCard}>hdsa</Text>
            <Text style={styles.optionCard}>hdsa</Text>
            <Text style={styles.optionCard}>hdsa</Text>
            <Text style={styles.optionCard}>hdsa</Text>
        </View>);
}

export default OptionContainer;

const styles = StyleSheet.create({
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

    optionContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 30
    },
})