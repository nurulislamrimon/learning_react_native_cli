import {Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Color from './components/Color';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>App</Text>
      <Color />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
