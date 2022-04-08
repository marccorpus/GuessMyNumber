import { useState, useEffect } from "react";
import { StyleSheet, View, Alert, FlatList } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Label from "../components/ui/Label";
import Button from "../components/ui/Button";
import Guess from "../components/game/Guess";

import colors from "../constants/colors";

const GameScreen = ({ numberToGuess, guesses, onGuess }) => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(99);
  const [guessNumber, setGuessNumber] = useState();

  useEffect(() => {
    guessHandler();
  }, [min, max]);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const guessHandler = () => {
    const randomNumber = generateRandomNumber();

    setGuessNumber(randomNumber);

    onGuess(randomNumber);
  };

  const alert = () => {
    Alert.alert("Dont't Lie", "You know that this is wrong...", [
      { text: "Sorry", style: "destructive" },
    ]);
  };

  const lowerHandler = () => {
    if (numberToGuess > guessNumber) {
      alert();

      return;
    }

    setMax(guessNumber - 1);
  };

  const higherHandler = () => {
    if (numberToGuess < guessNumber) {
      alert();

      return;
    }

    setMin(guessNumber + 1);
  };

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>

      <Title
        containerStyle={styles.guessContainer}
        textStyle={styles.guessText}
      >
        {guessNumber}
      </Title>

      <Card containerStyle={styles.card}>
        <Label>Lower or Higher?</Label>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={lowerHandler}>
              <Ionicons name="remove" size={16} />
            </Button>
          </View>
          <View style={styles.button}>
            <Button onPress={higherHandler}>
              <Ionicons name="add" size={16} />
            </Button>
          </View>
        </View>
      </Card>

      <View style={styles.guesses}>
        <FlatList
          data={guesses}
          renderItem={({ item, index }) => (
            <Guess guessNumber={guesses.length - index} guess={item} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  guessContainer: {
    padding: 16,
    marginTop: 24,
    borderColor: colors.Accent500,
    borderWidth: 4,
    borderRadius: 8,
  },
  guessText: {
    color: colors.Accent500,
    fontSize: 40,
  },
  card: {
    marginTop: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
  },
  guesses: {
    flex: 1,
    marginTop: 8,
  },
});
