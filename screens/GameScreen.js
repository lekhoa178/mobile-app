import {Button, Pressable, StyleSheet, Text, Touchable, View} from "react-native";
import Title from "../components/ui/Title";
import Volume from "../components/ui/Volume";
import React from "react";
import {useDispatch} from "react-redux";
import {getId} from "../context/actions/LessonAction";

function GameScreen() {
    // const dispatch = useDispatch();
    // const {stageId, levelId} = dispatch(getId());
    // console.log(stageId, levelId);

    const sentence = "hello world!";

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Title oStyle={{fontSize: 25, padding: 0}}>Translate to Vietnamese</Title>
                <View style={styles.sentenceContainer}>
                    <Volume word={sentence}/>
                    <Text style={{margin: 10, fontSize: 17}}>{sentence}</Text>
                </View>
            </View>

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
            </View>

            <View style={styles.optionContainer}>
                <Text style={styles.optionCard}>hdsa</Text>
                <Text style={styles.optionCard}>hdsa</Text>
                <Text style={styles.optionCard}>hdsa</Text>
                <Text style={styles.optionCard}>hdsa</Text>
                <Text style={styles.optionCard}>hdsa</Text>
                <Text style={styles.optionCard}>hdsa</Text>
            </View>

            <View style={styles.confirmContainer}>
                <Pressable
                    style={styles.buttonConfirm}
                >
                    <Text style={styles.textConfirm}>CONFIRM</Text>
                </Pressable>
            </View>
        </View>);
}

export default GameScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    headerContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    sentenceContainer: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5,
    },

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

    optionContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 30
    },

    confirmContainer: {
        flex: 1,
        justifyContent:'flex-end',
        marginBottom:25
    },

    buttonConfirm: {
        marginHorizontal: 10,
        backgroundColor: "#2499FF",
        marginTop: 20,
        borderRadius: 5,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        paddingVertical:15,
        paddingHorizontal:140,
        borderBottomWidth:5,
        borderColor:"#1664a6"

    },

    buttonConfirmText: {
        color: "white", // Change the text color
        fontSize: 21,
        fontWeight: "bold" // Make the text bold
    },
    textConfirm: {
        textAlign: "center",
        color: "white" // Change the text color
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