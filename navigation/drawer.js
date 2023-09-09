import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { HomeStack, ProfileStack } from "./stack";
import { SafeAreaView, Image, View, Linking } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();

export const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView
            style={{ flex: 1, paddingTop: 20, backgroundColor: "#99f6e4" }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 140,
              }}
            >
              <Image
                style={{ width: 100, resizeMode: "contain" }}
                source={require("../assets/logos/gt_logo.png")}
              />
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
              label="More info"
              onPress={() => {
                Linking.openURL(
                  "https://github.com/aaronwork1205/CS_8803_MAS_fall2023"
                );
              }}
              icon={() => <Ionicons name="information" size={22} />}
            />
          </SafeAreaView>
        );
      }}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          drawerIcon: () => <Ionicons name="home" size={22} />,
        }}
      />
      <Drawer.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          title: "Profiles",
          drawerIcon: () => (
            <MaterialCommunityIcons name="face-man-profile" size={22} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
