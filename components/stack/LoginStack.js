import LoginScreen from "../../screens/LoginScreen";
import SignUpScreen from "../../screens/SignUpScreen";
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function LoginStack({setLoggedIn}) {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBarOptions={{}}
        >
            <Stack.Screen
                name='login'
                component={LoginScreen}
                options={{
                    tabBarVisible: false,
                }}
                initialParams={{setLoggedIn: setLoggedIn}}
            />
            <Stack.Screen name='signup'
                component={SignUpScreen}
                initialParams={{setLoggedIn: setLoggedIn}}/>
        </Stack.Navigator>
    );
}

export default LoginStack;