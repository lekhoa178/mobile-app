import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchPanel from '../components/SearchPanel';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchHistory from '../components/SearchHistory';
import WordPanel from '../components/definition/WordPanel';

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        {/* <SearchPanel /> */}
        <WordPanel />
        <SearchHistory />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  titleContainer: {},
});
