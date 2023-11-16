import GameScreen from "../../screens/GameScreen";
import LessonScreen from "../../screens/LessonScreen";
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function LessonStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBarOptions={{}}
        >
            <Stack.Screen
                name='lessonList'
                component={LessonScreen}
                options={{
                    tabBarVisible: false,
                }}
            />
            <Stack.Screen name='game' component={GameScreen} />
        </Stack.Navigator>
    );
}

export default LessonStack;