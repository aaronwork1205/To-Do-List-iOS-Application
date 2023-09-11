import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
export const navOptions = (nav) => {
  const { userInfo } = useContext(AuthContext);
  return {
    headerTintColor: "#cbd5e1",
    headerStyle: {
      backgroundColor: "#0f172a",
    },
    headerRight: () => (
      <Ionicons
        name="menu"
        size={32}
        color="white"
        onPress={() => nav.toggleDrawer()}
      ></Ionicons>
    ),
    headerLeft: () => (
      <Text style={{ color: "white", fontSize: 20, paddingLeft: 5 }}>
        {`Hello ${userInfo.name}`}
      </Text>
    ),
  };
};
