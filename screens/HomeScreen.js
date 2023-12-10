import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WordList from '../components/WordList';
import WordPanel from '../components/definition/WordPanel';
import {useSelector} from "react-redux";

function HomeScreen({ navigation }) {

    const search = useSelector(state => state.search.words);

    return (
        <SafeAreaView style={styles.container}>
            {search.length !== 0 ? <Text>Hiển thị 10 kết quả gần nhất</Text> : <Text>Tìm kiếm gần đây</Text>}
            <WordList search={search}/>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
});
