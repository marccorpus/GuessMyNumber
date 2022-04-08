import {
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

import colors from "./src/constants/colors";

import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <LinearGradient
      colors={[colors.Primary500, colors.Accent500]}
      style={styles.linearGradient}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.imageBackround}
        imageStyle={styles.imageBackgroundImage}
      >
        <ExpoStatusBar style="light" />

        <SafeAreaView style={styles.safeAreaView}>
          <HomeScreen />
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  imageBackround: {
    flex: 1,
  },
  imageBackgroundImage: {
    opacity: 0.25,
  },
  safeAreaView: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginHorizontal: 24,
  },
});
