import { useNavigation } from "@react-navigation/native";
import Register_or_Signin from "../screens/register_or_signin";
import SignIn from "../screens/signin";
import { createStackNavigator } from "@react-navigation/stack";
import { navOptions } from "./options";

const Stack = createStackNavigator();
export const AuthStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen name="register_or_signin" component={Register_or_Signin} />
      <Stack.Screen name="signin" component={SignIn} />
      {/* <Stack.Screen name="register" component={register} /> */}
    </Stack.Navigator>
  );
};