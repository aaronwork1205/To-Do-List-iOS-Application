import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  Button,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState, useLayoutEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export default function SignInPage(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigation = useNavigation(); // Initialize navigation

  const { login } = useContext(AuthContext);
  const handleSignIn = () => {
    if (email.trim() === "" && password.trim() === "") {
      Alert.alert("email and password required!");
    } else if (email.trim() === "") {
      Alert.alert("email required!");
    } else if (password.trim() === "") {
      Alert.alert("password required!");
    } else {
      // setEmail("");
      // setPassword("");
      login(email.toLowerCase(), password);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Log In</Text>
      <Image
        style={styles.logo}
        source={require("../assets/logos/gt_logo.png")}
      ></Image>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        style={styles.input}
      />

      <Button title="Sign In" onPress={handleSignIn} />

      <Button
        title="New to this app? Register here!"
        onPress={() => navigation.navigate("register")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
    marginTop: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
  },
  logo: {
    width: 150,
    height: 120,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
