import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const EventItem = ({ id, date, description, location }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("Event", {
          eventId: id,
          date,
          description,
          location,
        })
      }
    >
      <Text>{`Date: ${date}`}</Text>
      <Text>{`Description: ${description}`}</Text>
      <Text>{`Location: ${location}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    //borderWidth: 1,
    //borderColor: "#c5c5c5",
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 10,
  },
});

export default EventItem;
