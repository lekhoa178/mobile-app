import React, { useEffect, useState } from "react";
import {
    Dimensions,
    FlatList,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View
} from "react-native";
import { navigate } from "../RootNavigation";
import {useSelector} from "react-redux";

function LoseScreen() {

    const correctAns = useSelector(state => state.lesson.correctAns);

    const handleFinish = () => {
        navigate("lessonList");
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Không vượt qua màn!</Text>
            <Text style={styles.correct}>Đúng {correctAns} / 10</Text>
            <Image source={require("../assets/sadcat.jpg")} style={styles.image} />
            <Text style={styles.textWin}>
                Hãy cố gắng thử lại lần nữa nhé ^^
            </Text>
            <Pressable style={styles.buttonFinish} onPress={handleFinish}>
                <Text style={styles.textConfirm}>CONFIRM</Text>
            </Pressable>
        </View>
    );
}

export default LoseScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20,
        color: "#666"
    },
    title: {
        flex: 0.8,
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        color: "#666" 
    },
    correct: {
        flex: 0.7,
        fontSize: 22,
        fontWeight: "bold",
        color: "#e8386e"
    },
    image: {
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 200,
        marginTop: 20
    },
    textWin: {
        flex: 0.8,
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        color: "#666"
    },
    buttonFinish: {
        marginHorizontal: 10,
        backgroundColor: "#2499FF",
        marginBottom: 20,
        borderRadius: 5,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingVertical: 15,
        paddingHorizontal:
            (Dimensions.get("window").width - Dimensions.get("window").width * 0.3) /
            2,
        borderBottomWidth: 5,
        borderColor: "#1664a6"
    },

    textConfirm: {
        textAlign: "center",
        color: "white",
        fontSize: 20
    }
});
