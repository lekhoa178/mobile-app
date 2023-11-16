import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WordList from '../components/WordList';
import WordPanel from '../components/definition/WordPanel';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <SearchPanel />
        <WordPanel />
        <SearchHistory />
         */}
      <Text>Tìm kiếm gần đây</Text>
      <WordList />
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
