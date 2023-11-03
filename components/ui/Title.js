import { StyleSheet, View, Text } from 'react-native';

function Title({ children, size }) {
  return <Text style={[styles.title, { fontSize: size }]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textTransform: 'lowercase',
  },
});
