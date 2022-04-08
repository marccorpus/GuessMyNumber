import { StyleSheet, View, Text } from "react-native";

const Title = ({ children, containerStyle, textStyle }) => {
  return (
    <View style={[styles.container, containerStyle && { ...containerStyle }]}>
      <Text style={[styles.text, textStyle && { ...textStyle }]}>
        {children}
      </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#ffffff",
    padding: 8,
  },
  text: {
    color: "#ffffff",
    fontFamily: "open-sans-bold",
    fontSize: 24,
    textAlign: "center",
  },
});
