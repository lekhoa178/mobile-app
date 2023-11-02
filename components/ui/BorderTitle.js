import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function BorderTitle({ children }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default BorderTitle;

const styles = StyleSheet.create({
  titleContainer: {
    width: 100,
    backgroundColor: '#BBB',
    padding: 10,
    textAlign: 'center',
    borderRadius: 10,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
