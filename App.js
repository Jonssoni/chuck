// App.js

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import JokeComponent from './src/JokeComponent';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <JokeComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default App;
