import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from 'expo-web-browser';
export default function Card(props) {
    const gotoSource = () => {
        if (props.url) {
          WebBrowser.openBrowserAsync(props.url);
        } else {
          console.error("URL is null or undefined");
        }
      };
      
  return (
    <TouchableOpacity style={styles.container} onPress={gotoSource}>
      <Image
        source={{
          uri: props.urlToImage,
        }}
        style={styles.cardImage}
      />
      <View style={styles.text}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <View style={styles.details}>
          <Text style={styles.authorHeading}>
            by:<Text style={styles.authorValue}>{props.author}</Text>
          </Text>
     
        </View>
      <Text>Published:<Text style={styles.date}>{props.publishedAt}</Text></Text>  
        <View style={{ marginTop: 10 }}>
          <Text style={styles.sourceHeading}>
            source:<Text style={styles.sourceValue}>{props.sourceName}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 30,
    shadowColor: "#000000",
    shadowOffset: {
      width: 5,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  text: {
    padding: 20,
    backgroundColor: "white",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  title: {
    fontSize: 20,
    fontWeight: "800",
    marginVertical: 10,
  },
  description: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "400",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  authorValue: {
    fontWeight: "bold",
  },
  date: {
    fontWeight: "bold",
    color: "#00b4d8",
    fontSize: 17,
    padding:10
  },
  sourceHeading: {
    fontWeight: "800",
  },
  sourceValue: {
    color: "#00b4d8",
    fontWeight: "bold",
    fontSize: 20,
  },
});
