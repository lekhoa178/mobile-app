import React, {useEffect, useState} from "react";
import {FlatList, Image, Pressable, StyleSheet, Text, View} from "react-native";

function FinishGame() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Way to go,you won!</Text>
            <Image source={require('../assets/fun.jpg')} style={styles.image}/>
            <Text style={styles.textWin}>Keep practing and give another game a try</Text>
            <Pressable
                style={styles.buttonFinish}
            >
                <Text style={styles.textConfirm}>CONFIRM</Text>
            </Pressable>
        </View>);
}

export default FinishGame;

const styles = StyleSheet.create({
    container: {
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        color:"#666"
    },
    title: {
        flex: 0.8,
        fontSize:30,
        textAlign:"center",
        fontWeight:"bold",
        color:"#666",

    },
    image: {
        justifyContent:"center",
        alignItems:"center",
        width:200,
        height:200,
        marginTop:20
    },
    textWin:{
        flex: 0.8,
        fontSize:25,
        fontWeight:"bold",
        textAlign:"center",
        color: '#666'
    },
    buttonFinish: {
        marginHorizontal: 10,
        backgroundColor: "#2499FF",
        marginBottom: 20,
        borderRadius: 5,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        paddingVertical:15,
        paddingHorizontal:140,
        borderBottomWidth:5,
        borderColor:"#1664a6"

    },

    textConfirm: {
        textAlign: "center",
        color: "white",
        fontSize:23
    },

})