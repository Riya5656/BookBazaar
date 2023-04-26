import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Welcome from './components/Welcome';
import Home from './components/Home';



export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
