import {Button, Pressable, StyleSheet, Text, Touchable, View} from "react-native";
import Title from "../components/ui/Title";
import Volume from "../components/ui/Volume";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getQAs} from "../service/LessonService";
import AnswerContainer from "../components/game/AnswerContainer";
import OptionContainer from "../components/game/OptionContainer";
import {setAnswerSentence, setOptionSentence} from "../context/actions/LessonAction";
import {navigate} from "../RootNavigation";

let questionsType = [];
let correctAns = -1;
let ansWords = [];
let optWords = [];

const totalQuestions = 13;

function sortRandomly(words) {
    for (let i = words.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        const temp = words[i]; // swap list [i] and list [j]
        words[i] = words[j];
        words[j] = temp;
    }

    return words;
}

function GameScreen() {
    const dispatch = useDispatch();

    const { stageId, levelId } = useSelector(state => state.lesson.id);
    const [curQuestion, setCurQuestion] = useState(-1);
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

        if (curQuestion + 1 >= totalQuestions) {
            navigate("finish-game");
            return;
        }

        const {english, vietnamese} = sentences[curQuestion + 1];

        let randomQues = 0;
        while (randomQues === curQuestion + 1) {
            randomQues = Math.floor(Math.random() * totalQuestions);
        }

        const ran = sentences[randomQues];

        if (questionsType[curQuestion + 1] >= 1) {
            let ranWords = ran.vietnamese.split(' ');

            ranWords = ranWords.slice(0, Math.min(ranWords.length, 4));

            ansWords = [];
            optWords = vietnamese.split(' ');

            optWords = sortRandomly([...optWords, ...ranWords]);
        } else {
            let ranWords = ran.english.split(' ');

            ranWords = ranWords.slice(0, Math.min(ranWords.length, 4));

            ansWords = [];
            optWords = english.split(' ');

            optWords = sortRandomly([...optWords, ...ranWords]);
        }

        dispatch(setAnswerSentence([]));
        dispatch(setOptionSentence(optWords));

        setCurQuestion(curQuestion + 1);
    }

    const validateAns = () => {

        const ansStr = ansWords.join(' ');
        const {english, vietnamese} = sentences[curQuestion];

        if (questionsType[curQuestion] >= 1) {
            if (vietnamese === ansStr) {
                correctAns++;
                console.log("correct");
            }
        } else {
            if (english === ansStr) {
                correctAns++;
                console.log("correct");
            }
        }

        nextQuestion();
    }

    const optionSelectHandle = function(isAnswer, index) {
        if (isAnswer) {
            const word = ansWords[index];
            ansWords = ansWords.filter((_, i) => i !== index);
            optWords = [...optWords, word];
        } else {
            const word = optWords[index];
            optWords = optWords.filter((_, i) => i !== index);
            ansWords = [...ansWords, word];
        }
        dispatch(setAnswerSentence(ansWords));
        dispatch(setOptionSentence(optWords));
    }

    if (sentences.length === 0) {
        return <View></View>;
    }
    else if (curQuestion === -1) {
        nextQuestion();
        return <View></View>
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Title oStyle={{fontSize: 25, padding: 0}}>Translate to Vietnamese</Title>
                <View style={styles.sentenceContainer}>
                    <Volume word={sentences[curQuestion].english}/>
                    <Text style={{margin: 10, fontSize: 17}}>{questionsType[curQuestion] >= 1 ?
                        sentences[curQuestion].english :
                        ""}</Text>
                </View>
            </View>

            <AnswerContainer selectHandle={optionSelectHandle}></AnswerContainer>

            <OptionContainer selectHandle={optionSelectHandle}></OptionContainer>

            <View style={styles.confirmContainer}>
                <Pressable
                    style={styles.buttonConfirm}
                    onPress={validateAns}
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