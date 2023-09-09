import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import EventList from "../components/events/event-list";
import EventListV2 from "../components/events/event-list-v2";
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <EventListV2 />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});

export default HomeScreen;
