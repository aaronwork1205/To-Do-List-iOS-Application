import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, Pressable, Button, View, SafeAreaView } from 'react-native';

export default function Register_or_Signin(props) {
  
  const navigation = useNavigation();
  return (

    <SafeAreaView>
        <Button title='Register' style={styles.button} onPress={() => navigation.navigate("Register")}/>
        <Button title='Login' style={styles.button} onPress={() =>navigation.navigate("signin")}/>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  button: {
    flex:0,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
