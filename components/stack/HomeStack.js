import DefinitionScreen from "../../screens/DefinitionScreen";
import HomeScreen from "../../screens/HomeScreen";
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBarOptions={{}}
        >
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    tabBarVisible: false,
                }}
            />
            <Stack.Screen name='Definition' component={DefinitionScreen} />
        </Stack.Navigator>
    );
}

export default HomeStack;