import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../screens/ProfileScreen";
const Stack = createStackNavigator();

function ProfileStack({ setLoggedIn }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBarOptions={{}}
    >
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarVisible: false
        }}
        initialParams={{ setLoggedIn: setLoggedIn }}
      />
    </Stack.Navigator>
  );
}

export default ProfileStack;
