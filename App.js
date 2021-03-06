import { useState } from "react";
import {
  SafeAreaView,
  Platform,
  StatusBar,
  Alert,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { LinearGradient } from "expo-linear-gradient";

import colors from "./src/constants/colors";

import HomeScreen from "./src/screens/HomeScreen";
import GameScreen from "./src/screens/GameScreen";
import ResultScreen from "./src/screens/ResultScreen";

export default function App() {
  const [numberToGuess, setNumberToGuess] = useState("");
  const [screen, setScreen] = useState("Home");
  const [guesses, setGuesses] = useState([]);

  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  const confirmHandler = () => {
    const number = parseInt(numberToGuess);

    if (isNaN(number) || number < 1 || number > 99) {
      Alert.alert("Invalid Input", "Number must be between 1 to 99.", [
        { text: "Ok", style: "destructive" },
      ]);

      resetHandler();

      return;
    }

    setScreen("Game");
  };

  const resetHandler = () => {
    setNumberToGuess("");
  };

  const guessHandler = (guess) => {
    setGuesses((prevGuesses) => [guess, ...prevGuesses]);

    if (guess === parseInt(numberToGuess)) {
      setScreen("Result");
    }
  };

  const startNewGameHandler = () => {
    setNumberToGuess("");
    setScreen("Home");
    setGuesses([]);
  };

  return (
    <LinearGradient
      colors={[colors.Primary500, colors.Accent500]}
      style={styles.linearGradient}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.imageBackround}
        imageStyle={styles.imageBackgroundImage}
      >
        <ExpoStatusBar style="light" />

        <SafeAreaView style={styles.safeAreaView}>
          {screen === "Home" && (
            <HomeScreen
              numberToGuess={numberToGuess}
              onChangeText={(value) => setNumberToGuess(value)}
              onConfirm={confirmHandler}
              onReset={resetHandler}
            />
          )}

          {screen === "Game" && (
            <GameScreen
              numberToGuess={numberToGuess}
              guesses={guesses}
              onGuess={guessHandler}
            />
          )}

          {screen === "Result" && (
            <ResultScreen
              rounds={guesses.length}
              numberToGuess={numberToGuess}
              onStartNewGame={startNewGameHandler}
            />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  imageBackround: {
    flex: 1,
  },
  imageBackgroundImage: {
    opacity: 0.25,
  },
  safeAreaView: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginHorizontal: 24,
  },
});
