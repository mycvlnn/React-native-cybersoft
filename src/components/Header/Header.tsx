import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header: React.FC = ({children}) => {
  return (
    <View style={styles.box}>
      <Text>Burgers Story</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  box: {
    borderRadius: 16,
    backgroundColor: '#ccc',
  },
  text: {
    fontSize: 16,
  },
});
