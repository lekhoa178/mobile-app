import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  Dimensions,
} from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';

function RightBarHeader() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <FontAwesome5
        name='microphone-alt'
        size={24}
        color='#2499FF'
        style={{ marginRight: 30 }}
      />
      <Ionicons
        name='search-outline'
        size={24}
        color='#2499FF'
        style={{
          marginRight: 20,
        }}
      />
    </View>
  );
}

export default RightBarHeader;

const styles = StyleSheet.create({});
