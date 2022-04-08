import { StyleSheet, View, Text } from "react-native";

import colors from "../../constants/colors";

const Guess = ({ guessNumber, guess }) => {
  return (
    <View style={styles.container}>
      <Text>#{guessNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
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
});
