import Card from "components/UI/Card";
import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

const cardList = [
  {
    id: 1,
    name: "Purple",
    color: "#C9C9FF",
  },
  {
    id: 2,
    name: "Blue",
    color: "#3D85C6",
  },
  {
    id: 3,
    name: "Green",
    color: "#96CC96",
  },
  {
    id: 4,
    name: "Yellow",
    color: "#F4B940",
  },
];

const App = (): ReactNode => {
  const renderCardList = () => {
    return cardList.map(({ name, color, id }) => {
      return <Card key={id} name={name} color={color} />;
    });
  };

  return <View style={styles.container}>{renderCardList()}</View>;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
