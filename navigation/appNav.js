import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import "react-native-gesture-handler";
import { AppDrawer } from "./drawer";
import { AuthStack } from "./authStack";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import { useContext } from "react";

export default function AppNav() {
  const { isLoading, userToken } = useContext(AuthContext);
  if (isLoading) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large"></ActivityIndicator>
      </SafeAreaView>
    );
  }
  return (
    <NavigationContainer>
      {userToken !== null ? <AppDrawer /> : <AuthStack />}
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
