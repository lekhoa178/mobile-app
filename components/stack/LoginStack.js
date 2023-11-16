import LoginScreen from "../../screens/LoginScreen";
import SignUpScreen from "../../screens/SignUpScreen";
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function LoginStack() {
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
            />
            <Stack.Screen name='signup' component={SignUpScreen} />
        </Stack.Navigator>
    );
}

export default LoginStack;