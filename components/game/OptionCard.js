import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {useSelector} from "react-redux";

const OptionCard = (word, selectHandle, index, isAnswer) => {
    return(
        <Pressable onPress={() => selectHandle(isAnswer, index)}>
            <View style={styles.optionCard}>
                <Text style={{fontSize: 17}}>{word}</Text>
            </View>
        </Pressable>);
}

export default OptionCard;

const styles = StyleSheet.create({
    optionCard: {
        borderRadius: 15,
        borderColor: '#CCC',
        borderWidth: 1,
        padding: 10,
        fontSize: 20,
        marginBottom: 10,
        marginHorizontal: 3,
        borderBottomWidth: 4,
    },
})