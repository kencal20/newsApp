import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function SeachBar(props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="search"
        style={styles.input}
        value={props.searchText}
        onChangeText={(text) => props.setSearchText(text)}
        onSubmitEditing={props.onSubmit}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  input: {
    padding: 10,
    borderRadius: 10,
    color: "black",
    borderWidth: 1,
  },
});
