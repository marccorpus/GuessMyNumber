import { StyleSheet, View, TextInput } from "react-native";

import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Label from "../components/ui/Label";
import Button from "../components/ui/Button";

import colors from "../constants/colors";

const HomeScreen = ({ numberToGuess, onChangeText, onConfirm, onReset }) => {
  return (
    <View style={styles.container}>
      <Title>Guess My Number</Title>

      <Card containerStyle={styles.cardContainer}>
        <Label>Enter a Number</Label>

        <TextInput
          style={styles.textInput}
          keyboardType="number-pad"
          maxLength={2}
          value={numberToGuess}
          onChangeText={onChangeText}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button onPress={onReset}>Reset</Button>
          </View>
          <View style={styles.button}>
            <Button onPress={onConfirm}>Confirm</Button>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    alignSelf: "stretch",
    marginTop: 24,
  },
  textInput: {
    width: 64,
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: colors.Accent500,
    color: colors.Accent500,
    fontFamily: "open-sans-bold",
    fontSize: 32,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
  },
});
