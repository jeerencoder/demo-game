import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FlipCard from 'react-native-flip-card';

function GameScreen({navigation}) {
  const [numbers, setNumbers] = useState([]);
  const [steps, setSteps] = useState(0);
  const [value, setValue] = useState();

  useEffect(() => {
    allData();
  }, []);

  const allData = async () => {
    const randomNumbers = Array.from({length: 20}, () =>
      Math.floor(Math.random() * 100),
    );
    setNumbers(randomNumbers);
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    setValue(randomNumbers[randomNumber]);
  };

  const onUserClick = number => {
    setSteps(steps + 1);
    if (number === value) {
      restart();
      navigation.navigate('Result', {steps, success: true});
    } else {
      if (steps > 18) {
        restart();
        navigation.navigate('Result', {steps, success: false});
      }
    }
  };

  const goToHome = () => {
    restart();
    navigation.navigate('Home');
  };

  const restart = () => {
    allData();
    setSteps(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <FlipCard
          style={styles.flipCard}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={false}
          clickable={true}
          onFlipEnd={isFlipEnd => {
            console.log('isFlipEnd', isFlipEnd);
          }}>
          {/* Face Side */}
          <View style={styles.faceSide}>
            <Text style={styles.cardText}>Tap to show</Text>
          </View>
          {/* Back Side */}
          <View style={styles.backSide}>
            <Text style={styles.cardText}>The value is: {value}</Text>
          </View>
        </FlipCard>
      </View>
      <Text style={styles.stepsText}>Steps: {steps}</Text>
      <View style={styles.numbersContainer}>
        {numbers.map((number, index) => (
          <TouchableOpacity
            key={index}
            style={styles.numberButton}
            onPress={() => {
              onUserClick(number);
            }}>
            <Text style={styles.numberText}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={goToHome} style={styles.navigationButtonHome}>
        <Text style={styles.navigationButtonText}>Go to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={restart} style={styles.navigationButton}>
        <Text style={styles.navigationButtonText}>Restart</Text>
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
  cardContainer: {
    height: Dimensions.get('window').width * 0.8,
    width: Dimensions.get('window').width * 0.5,
    marginBottom: 20,
  },
  flipCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  faceSide: {
    flex: 1,
    backgroundColor: '#59422b',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
  },
  backSide: {
    flex: 1,
    backgroundColor: '#9c7c5a',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
  },
  cardText: {
    fontSize: 18,
    color: '#fff',
  },
  stepsText: {
    fontSize: 24,
    marginBottom: 10,
    color: '#333',
  },
  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  numberButton: {
    margin: 5,
    height: 45,
    width: 45,
    backgroundColor: '#b48c63',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  numberText: {
    fontSize: 18,
    color: '#fff',
  },
  navigationButtonHome: {
    height: 40,
    width: 200,
    margin: 10,
    padding: 10,
    backgroundColor: '#59422b',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationButton: {
    height: 40,
    width: 200,
    margin: 10,
    padding: 10,
    backgroundColor: '#9c7c5a',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationButtonText: {
    fontSize: 15,
    color: '#fff',
  },
});

export default GameScreen;
