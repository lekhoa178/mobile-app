import { StyleSheet, View, Text } from 'react-native';

function Title({ children, oStyle }) {
  return <Text style={[styles.title, oStyle]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textTransform: 'lowercase',
  },
});
