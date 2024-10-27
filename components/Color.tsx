import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import React from 'react';

const Color = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text style={[styles.content, isDarkMode ? styles.black : styles.white]}>
        Color
      </Text>
    </View>
  );
};

export default Color;

const styles = StyleSheet.create({
  content: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
  },
  white: {
    color: 'white',
    backgroundColor: 'black',
  },
  black: {
    color: 'black',
    backgroundColor: 'white',
  },
});
