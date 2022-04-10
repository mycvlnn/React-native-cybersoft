import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  name: string;
  color: string;
}

const Card: React.FC<Props> = ({ name, color }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.text}>{`${name}: ${color}`}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowRadius: 4,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 0,
    },

    margin: 8,
  },
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});
