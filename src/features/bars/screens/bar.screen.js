import React from "react";
import { Searchbar } from "react-native-paper";
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Appearance } from "react-native";
import { BarInfo } from "../components/bar.info";

export const BarScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar placeholder="Search" />
    </View>
    <View style={styles.list}>
      <BarInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222"
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "#222",
  },
});
