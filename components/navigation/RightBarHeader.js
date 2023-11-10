import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import * as Speech from 'expo-speech';

function RightBarHeader() {
  const [recognizedText, setRecognizedText] = useState('');
  const [isListening, setIsListening] = useState(false);

  // useEffect(() => {
  //   async function checkPermissions() {
  //     const { status } = await Speech.requestPermissionsAsync();
  //     if (status !== 'granted') {
  //       console.error('Permission to use the microphone is not granted.');
  //     }
  //   }
  //   checkPermissions();
  // }, []);

  const startSpeechToText = async () => {
    try {
      setIsListening(true);
      setRecognizedText('');
      const result = await Speech.startListeningAsync();
      if (result.status === 'granted') {
        Speech.onSpeechResults = (event) => {
          const transcript = event.value[0];
          setRecognizedText(transcript);
        };
      }
    } catch (error) {
      console.error('Error starting speech recognition:', error);
    }
  };

  const stopSpeechToText = async () => {
    try {
      setIsListening(false);
      await Speech.stopListeningAsync();
    } catch (error) {
      console.error('Error stopping speech recognition:', error);
    }
  };
  return (
    <View style={{ flexDirection: 'row' }}>
      {isListening ? (
        // ? <ActivityIndicator
        //     size="large"
        //     color="blue"
        //     onPress={stopVoiceRecognition}
        //   />
        <TouchableOpacity onPress={stopSpeechToText}>
          <FontAwesome5
            name='microphone-alt'
            size={24}
            color='pink'
            style={{ marginRight: 30 }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={startSpeechToText}>
          <FontAwesome5
            name='microphone-alt'
            size={24}
            color='#2499FF'
            style={{ marginRight: 30 }}
          />
        </TouchableOpacity>
      )}
      {recognizedText !== '' && (
        <Text>Text đã chuyển đổi: {recognizedText}</Text>
      )}
      {/* {isListening && <Text style={styles.listeningText}>Đang ghi âm...</Text>} */}

      <Ionicons
        name='search-outline'
        size={24}
        color='#2499FF'
        style={{ marginRight: 20 }}
      />
    </View>
  );
}

export default RightBarHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listeningText: {
    marginTop: 10,
    color: 'blue',
  },
});
