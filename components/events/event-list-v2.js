import React, { useContext, useEffect, useState } from "react";
import EventItem from "./event-item";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { BASE_URL } from "../../config";

const EventListV2 = () => {
  const [task, setTask] = useState({
    id: "",
    date: "",
    description: "",
    location: "",
  });
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const { setIsLoading, userToken } = useContext(AuthContext);
  const loadData = async () => {
    await axios
      .get(`${BASE_URL}/tasks`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        const serverData = res.data.tasks;
        const cleanedData = [];
        for (const data of serverData) {
          cleanedData.push({
            id: data._id,
            date: data.date,
            location: data.location,
            description: data.task,
          });
        }
        setTasks(cleanedData);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    setIsLoading(true);
    loadData();
    setIsLoading(false);
  }, []);

  const updateData = async (id, task) => {
    await axios
      .patch(
        `${BASE_URL}/tasks/${task.id}`,
        {
          task: task.description,
          date: task.date,
          location: task.location,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        loadData();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteData = async (id) => {
    await axios
      .delete(`${BASE_URL}/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        loadData();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const createData = async (task) => {
    await axios
      .post(
        `${BASE_URL}/tasks`,
        {
          task: task.description,
          date: task.date,
          location: task.location,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        loadData();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleAddTask = () => {
    if (task) {
      if (editIndex !== -1) {
        // Edit existing task
        const id = tasks[editIndex].id;
        // setTasks(updatedTasks);
        setIsLoading(true);
        updateData(id, task);
        setIsLoading(false);
        setEditIndex(-1);
      } else {
        // Add new task
        createData(task);
      }
      setTask("");
    }
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    const id = tasks[index].id;
    setIsLoading(true);
    deleteData(id);
    setIsLoading(false);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.task}>
      {/* <Text style={styles.itemList}>{item}</Text> */}
      <EventItem
        id={item.id}
        date={item.date}
        description={item.description}
        location={item.location}
      />
      <View style={styles.taskButtons}>
        {/* <Button
          onPress={() => handleEditTask(index)}
          style={styles.editButton}
          color="green"
          title="Edit"
        />
        <Button
          onPress={() => handleDeleteTask(index)}
          style={styles.deleteButton}
          color="red"
          title="Delete"
        /> */}

        <Ionicons
          name="create"
          size={24}
          color="green"
          marginRight={10}
          onPress={() => handleEditTask(index)}
        ></Ionicons>

        <Ionicons
          name="trash"
          size={24}
          color="red"
          onPress={() => handleDeleteTask(index)}
        ></Ionicons>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter date"
        value={task.date}
        onChangeText={(text) => setTask({ ...task, date: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task.description}
        onChangeText={(text) => setTask({ ...task, description: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter location"
        value={task.location}
        onChangeText={(text) => setTask({ ...task, location: text })}
      />
      <Button
        style={styles.addButtonText}
        onPress={handleAddTask}
        title={editIndex !== -1 ? "Update Task" : "Add Task"}
      ></Button>
      <FlatList
        data={tasks}
        style={{ marginbottom: 20 }}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    marginTop: 40,
    marginBottom: 40,
    overflow: "scroll",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 3,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    fontSize: 18,
  },
  itemList: {
    fontSize: 20,
  },
  taskButtons: {
    flexDirection: "row",
  },
  editButton: {
    marginRight: 10,
    color: "green",
    fontWeight: "bold",
    fontSize: 18,
  },
  deleteButton: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default EventListV2;
