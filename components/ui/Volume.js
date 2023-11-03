import { StyleSheet, View, Text, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

function Volume({ word }) {
  function speak() {
    Speech.speak(word);
  }

  return (
    <Pressable onPress={speak}>
      <FontAwesome name='volume-up' size={35} color={'#7599FF'} />
    </Pressable>
  );
}

export default Volume;

const styles = StyleSheet.create({});
