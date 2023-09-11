import { useNavigation } from "@react-navigation/native";
import React, { useState, useLayoutEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import HomeScreen from "./home-screen";
import { HeaderBackButton } from "@react-navigation/elements";


const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation(); // Initialize navigation

  const handleSignIn = () => {
   
    navigation.navigate("Home"); 
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Sign in",
      headerLeft: () => (
        <HeaderBackButton
          tintColor="black"
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        style={styles.input}
      />

      <Button title="Sign In" onPress={handleSignIn} color="black" style = {styles.heading} backgroundColor="pink"/>
      {/* <Button title="Register" onPress =  */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection : 'column',
    justifyContent: "center",
    alignItems: "center",
    
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 200,
    marginTop:20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default SignIn;
