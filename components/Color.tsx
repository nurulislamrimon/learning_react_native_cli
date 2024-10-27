import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Color = () => {
  return (
    <View>
      <Text style={styles.content}>Color</Text>
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
});
