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

function LeftBarHeader() {
  return (
    <FontAwesome5
      name='bars'
      size={20}
      color={'#2499FF'}
      style={{
        marginLeft: 10,
      }}
    />
  );
}

export default LeftBarHeader;

const styles = StyleSheet.create({});
