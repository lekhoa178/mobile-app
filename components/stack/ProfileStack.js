
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from "../../screens/ProfileScreen";
const Stack = createStackNavigator();

function ProfileStack() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBarOptions={{}}
        >
            <Stack.Screen
                name='profile'
                component={ProfileScreen}
                options={{
                    tabBarVisible: false,
                }}
            />

        </Stack.Navigator>
    );
}

export default ProfileStack;