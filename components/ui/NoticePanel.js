import {Dimensions, Pressable, StyleSheet, Text, View} from "react-native";
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import Title from "./Title";

const NoticePanel = ({children, correct, closeHandle}) => {
    return <View style={styles.baseContainer}>
        <View style={styles.container}>

            {correct ? (
                <View style={[styles.panelContainer, {justifyContent: 'center'}]}>
                    <Title oStyle={[styles.title, {color: '#1cd300'}]}>
                        Wrong Answer
                    </Title>
                    <AntDesign name="checkcircle" size={54} color="#1cd300" />
                </View>
            ) : (
                <View style={styles.panelContainer}>
                    <Title oStyle={[styles.title, {color: '#e70a0a'}]}>
                        Wrong Answer
                    </Title>
                    <AntDesign name="closecircle" size={50} color="#e70a0a" />
                    <Title oStyle={{fontWeight: 'bold', fontSize: 20, color: '#444'}}>The correct is:</Title>
                </View>
            )}
            <View>
                <Text style={styles.answerText}>{children}</Text>
            </View>

            <View style={styles.closeContainer}>
                <Pressable onPress={closeHandle}>
                    <FontAwesome name="close" size={24} color="#7599FF" />
                </Pressable>
            </View>
        </View>
    </View>
}

export default  NoticePanel;

const styles = StyleSheet.create({
    baseContainer: {
        position: 'absolute',
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        flex: 1,
        alignItems: 'center',

    },

    container: {
        backgroundColor: 'white',
        elevation: 5,
        position: 'absolute',
        top: 200,
        height: 300,
        width: Dimensions.get("window").width * 0.75,
        borderRadius: 15,
        padding: 20,
        flex: 1,
        alignItems: 'center',
        paddingVertical: 50,
        paddingBottom: 30
    },

    panelContainer: {
        flex: 1,
        alignItems: 'center',
        gap: 20,
    },

    title: {
        textTransform: 'capitalize',
        fontWeight: "bold",
        fontSize: 25,
        color: '#e70a0a',
    },

    answerText: {
        fontSize: 18
    },

    closeContainer: {
        position: 'absolute',
        right: 20,
        top: 20
    },

    closeBtn: {
        fontWeight: "bold",
        fontSize: 20
    },


})