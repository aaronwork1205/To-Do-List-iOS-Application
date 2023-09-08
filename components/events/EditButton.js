import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"; // Import FontAwesome or any other icon library you prefer

const EditButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FontAwesome name="edit" size={20} color="#007AFF" /> {/* Edit icon */}
      <Text style={styles.buttonText}>Edit</Text> {/* Edit label */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF", // Button background color
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#007AFF", // Button border color
  },
  buttonText: {
    marginLeft: 5, // Spacing between icon and label
    color: "#007AFF", // Text color
    fontWeight: "bold",
  },
});

export default EditButton;
