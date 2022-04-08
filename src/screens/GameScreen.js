import { StyleSheet, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import Label from "../components/ui/Label";
import Button from "../components/ui/Button";

import colors from "../constants/colors";

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>

      <Title
        containerStyle={styles.guessContainer}
        textStyle={styles.guessText}
      >
        23
      </Title>

      <Card containerStyle={styles.card}>
        <Label>Lower or Higher?</Label>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={null}>
              <Ionicons name="remove" size="16" />
            </Button>
          </View>
          <View style={styles.button}>
            <Button onPress={null}>
              <Ionicons name="add" size="16" />
            </Button>
          </View>
        </View>
      </Card>
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
});
