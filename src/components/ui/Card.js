import { StyleSheet, View } from "react-native";

import colors from "../../constants/colors";

const Card = ({ children, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle && { ...containerStyle }]}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Primary800,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
