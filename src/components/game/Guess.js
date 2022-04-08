import { StyleSheet, View, Text } from "react-native";

import colors from "../../constants/colors";

const Guess = ({ guessNumber, guess }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{guessNumber}</Text>
      <Text style={styles.text}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default Guess;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Accent500,
    borderWidth: 2,
    borderColor: colors.Primary500,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    padding: 16,
  },
  text: {
    fontFamily: "open-sans",
  },
});
