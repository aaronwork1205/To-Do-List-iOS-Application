import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { HomeStack, MapStack } from "./navigation/stack";
import "react-native-gesture-handler";
import { AppDrawer } from "./navigation/drawer";
import { AuthStack } from "./navigation/authStack";


export default function App() {

  return (
    <NavigationContainer>
      <AuthStack />
      {/* <AppDrawer /> */}
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
