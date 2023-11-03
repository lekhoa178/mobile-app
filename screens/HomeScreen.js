import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchHistory from '../components/SearchHistory';
import WordPanel from '../components/definition/WordPanel';

function HomeScreen() {
  return (
    <SafeAreaView>
      {/* <SearchPanel />
        <WordPanel />
        <SearchHistory />
         */}
      <Text>Tìm kiếm gần đây</Text>
      <SearchHistory />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  titleContainer: {},
});
