import { StyleSheet, View, Image, Text } from "react-native";

import Title from "../components/ui/Title";
import Button from "../components/ui/Button";

import colors from "../constants/colors";

const ResultScreen = ({ rounds, numberToGuess, onStartNewGame }) => {
  return (
    <View style={styles.container}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/success.png")}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>
        Your phone needed <Text style={styles.textHighlight}>{rounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.textHighlight}>{numberToGuess}</Text>.
      </Text>

      <Button onPress={onStartNewGame} containerStyle={styles.button}>
        Start New Game
      </Button>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 125,
    overflow: "hidden",
    marginTop: 24,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    marginTop: 24,
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
  },
  textHighlight: {
    color: colors.Primary800,
    fontFamily: "open-sans-bold",
  },
  button: {
    marginTop: 24,
    padding: 16,
  },
});
