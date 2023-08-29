import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Random Guesses Game</Text>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('Game')}>
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d5c4a1',
  },
  title: {
    color: '#b48c63',
    fontSize: 30,
    marginBottom: 150,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  startButton: {
    height: 50,
    width: 150,
    backgroundColor: '#59422b',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
