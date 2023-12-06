import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

function BorderTitle({ children, styleTrans, styleText }) {
  return (
    <View style={[styles.titleContainer, styleTrans]}>
      <Text style={[styles.title, styleTrans]}>
        {children}
      </Text>
    </View>
  );
}

export default BorderTitle;

const styles = StyleSheet.create({
  titleContainer: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10
  },

  title: {
    fontWeight: "bold",
    fontSize: 20
  }
});
