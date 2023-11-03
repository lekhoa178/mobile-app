import { StyleSheet, View, Text, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import Volume from '../ui/Volume';
import Title from '../ui/Title';

const word = 'Myth';

function WordPanel() {
  const [favorite, setFavourite] = useState(false);

  function favor() {
    setFavourite(!favorite);
  }

  return (
    <View style={styles.container}>
      <Title size={35}>{word}</Title>
      <View style={styles.utilityContainer}>
        <Volume style={styles.volume} word={word} />
        <Pressable onPress={favor}>
          {favorite ? (
            <FontAwesome name='heart' size={35} color={'#7599FF'} />
          ) : (
            <FontAwesome name='heart-o' size={35} color={'#7599FF'} />
          )}
        </Pressable>
      </View>
    </View>
  );
}

export default WordPanel;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 'auto',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  utilityContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'space-between',
    gap: 20,
  },

  volume: {
    marginBottom: 15,
  },
});
