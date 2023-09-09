import { useNavigation } from "@react-navigation/native";
import React, { useState, useLayoutEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState("");
  const [email, setEmail] = useState("");

  const navigation = useNavigation(); // Initialize navigation
  const { register } = useContext(AuthContext);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Task Manager App",
      headerLeft: () => (
        <HeaderBackButton
          tintColor="black"
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, []);

  const handleRegister = () => {
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      passwordConfirmed.trim() === ""
    ) {
      Alert.alert("All fields required to be filled");
    } else if (password != passwordConfirmed) {
      Alert.alert("Passwords doesn't match");
    } else {
      // setUsername("");
      // setPassword("");
      // setPasswordConfirmed("");
      // setEmail("");
      register(username, email, password);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <Image
        style={styles.logo}
        source={require("../assets/logos/gt_logo.png")}
      ></Image>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />

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

      <TextInput
        placeholder="Confirm Password"
        value={passwordConfirmed}
        onChangeText={(text) => setPasswordConfirmed(text)}
        secureTextEntry={true}
        style={styles.input}
      />

      <Button
        title="Register"
        onPress={handleRegister}
        style={styles.heading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
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
});

export default Register;
