import { useNavigation } from "@react-navigation/native";
import SignInPage from "../screens/sign-in-page";
import Register from "../screens/register";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export const AuthStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="sign_in"
        component={SignInPage}
        options={{ title: "Task Manager App" }}
      />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
};
