import {Button, Pressable, StyleSheet, Text, Touchable, View} from "react-native";
import Title from "../components/ui/Title";
import Volume from "../components/ui/Volume";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getQAs} from "../service/LessonService";
import AnswerContainer from "../components/game/AnswerContainer";
import OptionContainer from "../components/game/OptionContainer";

let questionsType = [];
let correctAns = 0;

const totalQuestions = 13;


function GameScreen() {
    const { stageId, levelId } = useSelector(state => state.lesson.id);
    const [curQuestion, setCurQuestion] = useState(0);
    const [sentences, setSentences] = useState([]);

    useEffect(() => {
        const setupRound = async() => {
            setSentences(await getQAs(stageId, levelId, totalQuestions));
            for (let i = 0; i < totalQuestions; ++i) {
                questionsType.push(Math.floor(Math.random() * (3)));
            }

        }

        setupRound();
    }, [stageId, levelId]);

    const nextQuestion = function() {
        setCurQuestion(curQuestion + 1);
    }

    if (sentences.length === 0)
        return <View></View>;

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Title oStyle={{fontSize: 25, padding: 0}}>Translate to Vietnamese</Title>
                <View style={styles.sentenceContainer}>
                    <Volume word={sentences[curQuestion].english}/>
                    <Text style={{margin: 10, fontSize: 17}}>{sentences[curQuestion].english}</Text>
                </View>
            </View>

            <AnswerContainer></AnswerContainer>

            <OptionContainer></OptionContainer>

            <View style={styles.confirmContainer}>
                <Pressable
                    style={styles.buttonConfirm}
                    onPress={nextQuestion}
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

})