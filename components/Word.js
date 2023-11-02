import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function Word() {
  return (
    <View style={styles.volumeContainer}>
      <FontAwesome name='volume-up' size={35} color={'#7599FF'} />
      <Text style={styles.volumeText}>US</Text>
    </View>
  );
}

export default Word;

const styles = StyleSheet.create({
  volumeContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  volumeText: {
    fontWeight: 'bold',
  },
});
