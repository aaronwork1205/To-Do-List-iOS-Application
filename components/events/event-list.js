import React, { useState } from "react";
import { View, Text, FlatList, RefreshControl, TextInput, Button } from "react-native";
import { DUMMY_DATA } from "../../data/dummy";
import EventItem from "./event-item";

const EventList = () => {
  const [editedTask, setEditedTask] = useState({
    id: "",
    title: "",
    description: "",
    location: "",
  });

  const [data, setData] = useState(DUMMY_DATA); // Initialize with the data

  const handleEdit = (id) => {
    // Find the index of the item with the matching id in data
    const itemIndex = data.findIndex((item) => item.id === id);

    // Create a copy of the item with the edited values
    const updatedItem = {
      ...data[itemIndex],
      title: editedTask.title,
      description: editedTask.description,
      location: editedTask.location,
    };

    // Update the item in data
    data[itemIndex] = updatedItem;

    // Trigger a re-render by updating the state with the modified data
    setData([...data]);

    // Clear the editedTask state for the next edit
    setEditedTask({ id: "", title: "", description: "", location: "" });

    // In a real application, you would save the changes to a database or backend here.
    // You cannot directly write to the DUMMY_DATA file in the project directory.
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <EventItem
          id={item.id}
          title={item.title}
          description={item.description}
          location={item.location}
        />
        <TextInput
          placeholder="Edit Title"
          value={editedTask.title}
          onChangeText={(text) =>
            setEditedTask({ ...editedTask, title: text })
          }
        />
        <TextInput
          placeholder="Edit Description"
          value={editedTask.description}
          onChangeText={(text) =>
            setEditedTask({ ...editedTask, description: text })
          }
        />
        <TextInput
          placeholder="Edit Location"
          value={editedTask.location}
          onChangeText={(text) =>
            setEditedTask({ ...editedTask, location: text })
          }
        />
        <Button
          title="Save Changes"
          onPress={() => handleEdit(item.id)}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={data} // Use the data state
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => console.log("refreshing")}
          />
        }
      />
    </View>
  );
};

export default EventList;


// // import React, { useState } from "react";
// // import { View, Text, FlatList, RefreshControl, TextInput, Button } from "react-native";
// // import { DUMMY_DATA } from "../../data/dummy";
// // import EventItem from "./event-item";

// // const EventList = () => {
// //   const [editedTask, setEditedTask] = useState({
// //     id: "",
// //     title: "",
// //     description: "",
// //     location: "",
// //   });

// //   const [data, setData] = useState(DUMMY_DATA); // Initialize with the data

// //   // State to track whether each item is in edit mode
// //   const [editMode, setEditMode] = useState({});

// //   const handleEdit = (id) => {
// //     // Find the index of the item with the matching id in data
// //     const itemIndex = data.findIndex((item) => item.id === id);

// //     // Create a copy of the item with the edited values
// //     const updatedItem = {
// //       ...data[itemIndex],
// //       title: editedTask.title,
// //       description: editedTask.description,
// //       location: editedTask.location,
// //     };

// //     // Update the item in data
// //     data[itemIndex] = updatedItem;

// //     // Trigger a re-render by updating the state with the modified data
// //     setData([...data]);

// //     // Clear the editedTask state for the next edit
// //     setEditedTask({ id: "", title: "", description: "", location: "" });

// //     // Exit edit mode for the current item
// //     setEditMode({ ...editMode, [id]: false });

// //     // In a real application, you would save the changes to a database or backend here.
// //     // You cannot directly write to the DUMMY_DATA file in the project directory.
// //   };

// //   const renderItem = ({ item }) => {
// //     return (
// //       <View>
// //         <EventItem
// //           id={item.id}
// //           title={item.title}
// //           description={item.description}
// //           location={item.location}
// //           // Pass a function to toggle edit mode for this item
// //           onEditPress={() => setEditMode({ ...editMode, [item.id]: true })}
// //         />
// //         {editMode[item.id] && ( // Show edit fields when in edit mode
// //           <>
// //             <TextInput
// //               placeholder="Edit Title"
// //               value={editedTask.title}
// //               onChangeText={(text) =>
// //                 setEditedTask({ ...editedTask, title: text })
// //               }
// //             />
// //             <TextInput
// //               placeholder="Edit Description"
// //               value={editedTask.description}
// //               onChangeText={(text) =>
// //                 setEditedTask({ ...editedTask, description: text })
// //               }
// //             />
// //             <TextInput
// //               placeholder="Edit Location"
// //               value={editedTask.location}
// //               onChangeText={(text) =>
// //                 setEditedTask({ ...editedTask, location: text })
// //               }
// //             />
// //             <Button
// //               title="Save Changes"
// //               onPress={() => handleEdit(item.id)}
// //             />
// //           </>
// //         )}
// //       </View>
// //     );
// //   };

// //   return (
// //     <View>
// //       <FlatList
// //         data={data} // Use the data state
// //         keyExtractor={(item) => item.id}
// //         renderItem={renderItem}
// //         refreshControl={
// //           <RefreshControl
// //             refreshing={false}
// //             onRefresh={() => console.log("refreshing")}
// //           />
// //         }
// //       />
// //     </View>
// //   );
// // };

// // export default EventList;
// import React, { useState } from "react";
// import { useNavigation } from "@react-navigation/native";
// import { TouchableOpacity, StyleSheet, Text, View, TextInput, Button } from "react-native";
// import FontAwesome from "react-native-vector-icons/FontAwesome";

// const EventItem = ({ id, title, description, location }) => {
//   const navigation = useNavigation();
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedValues, setEditedValues] = useState({
//     title,
//     description,
//     location,
//   });

//   const handleEditPress = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleSavePress = () => {
//     // Implement logic to save the edited values
//     // For example, you can send the editedValues to a server or update your data source
//     setIsEditing(false);
//   };

//   return (
//     <TouchableOpacity
//       style={styles.card}
//       onPress={() =>
//         navigation.navigate("Event", { eventId: id, title, description, location })
//       }
//     >
//       <View style={styles.itemContent}>
//         <View style={styles.textContainer}>
//           <Text style={styles.title}>{title}</Text>
//           {isEditing ? (
//             <>
//               <TextInput
//                 value={editedValues.title}
//                 onChangeText={(text) =>
//                   setEditedValues({ ...editedValues, title: text })
//                 }
//                 placeholder="Edit Title"
//                 style={styles.editField}
//               />
//               <TextInput
//                 value={editedValues.description}
//                 onChangeText={(text) =>
//                   setEditedValues({ ...editedValues, description: text })
//                 }
//                 placeholder="Edit Description"
//                 style={styles.editField}
//               />
//               <TextInput
//                 value={editedValues.location}
//                 onChangeText={(text) =>
//                   setEditedValues({ ...editedValues, location: text })
//                 }
//                 placeholder="Edit Location"
//                 style={styles.editField}
//               />
//               <Button title="Save" onPress={handleSavePress} />
//             </>
//           ) : (
//             <>
//               <Text>{description}</Text>
//               <Text>{location}</Text>
//             </>
//           )}
//         </View>
//         <TouchableOpacity onPress={handleEditPress}>
//           <FontAwesome name="edit" size={24} color="#007AFF" />
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     borderWidth: 1,
//     borderColor: "#c5c5c5",
//     borderRadius: 10,
//     marginVertical: 5,
//     padding: 20,
//   },
//   itemContent: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   textContainer: {
//     flex: 1,
//   },
//   title: {
//     fontWeight: "bold",
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   editField: {
//     borderBottomWidth: 1,
//     borderColor: "#c5c5c5",
//     marginBottom: 10,
//   },
// });

// export default EventItem;

