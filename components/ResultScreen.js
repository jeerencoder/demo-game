import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function ResultScreen({route, navigation}) {
  const {steps, success} = route.params;

  const handleRestart = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>
        {success
          ? 'Congratulations! 🥳 \n' + 'Success '
          : 'Try again \nFailed '}{' '}
        Steps: {steps + 1}
      </Text>
      <TouchableOpacity
        style={styles.restartButton}
        onPress={() => {
          handleRestart();
        }}>
        <Text style={styles.buttonText}>{success ? 'Restart' : 'Retry'}</Text>
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
  resultText: {
    color: '#b48c63',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
  },
  restartButton: {
    marginTop: 50,
    backgroundColor: '#59422b',
    borderRadius: 10,
    padding: 10,
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultScreen;
