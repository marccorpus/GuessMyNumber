import { StyleSheet, Text } from "react-native";

import colors from "../../constants/colors";

const Label = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default Label;

const styles = StyleSheet.create({
  text: {
    color: colors.Accent500,
    fontFamily: "open-sans",
    fontSize: 20,
  },
});
