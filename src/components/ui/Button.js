import { StyleSheet, Pressable, View, Text } from "react-native";

import colors from "../../constants/colors";

const Button = ({ children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.opacity}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.Primary500,
    padding: 8,
    borderRadius: 24,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "open-sans",
    fontSize: 16,
  },
  opacity: {
    opacity: 0.75,
  },
});
