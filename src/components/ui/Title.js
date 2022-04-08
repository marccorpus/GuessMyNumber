import { StyleSheet, View, Text } from "react-native";

const Title = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#ffffff",
    padding: 16,
  },
  text: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
