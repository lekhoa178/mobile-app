import {StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";



function ProfileScreen() {

    return (
        <View style={styles.container}>
            <Text>Profile text</Text>
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"

    }
});
