import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";
import EventList from "../components/events/event-list";
import SignIn from "./signin";
import Register_or_Signin from "./register_or_signin";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View styles={styles.screen}>
      {/* <EventList /> */}
      {/* <SignIn/> */}
      <Register_or_Signin/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },

});

export default HomeScreen;
