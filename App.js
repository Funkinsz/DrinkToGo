import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Appearance,
} from "react-native";
import { BarScreen } from "./src/features/bars/screens/bar.screen";

export default function App() {
  const platform = Platform.OS;
  return (
    <>
      <StatusBar
        style="light"
        backgroundColor={
          Appearance.getColorScheme() === "dark" ? "#222" : "white"
        }
      />
      <BarScreen />
      {platform !== "android" && <ExpoStatusBar style="auto" />}
    </>
  );
}

const styles = StyleSheet.create({
  Statusbar: {
    backgroundColor: "#333",
  },
});
