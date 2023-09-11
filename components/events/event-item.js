import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const EventItem = ({ id, title, description, location }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("Event", { eventId: id, title, description, location })
      }
    >
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{location}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#c5c5c5",
    borderRadius: 10,
    marginVertical: 5,
    padding: 30,
  },
});

export default EventItem;
