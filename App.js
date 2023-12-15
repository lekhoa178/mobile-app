import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Dimensions
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  createNavigationContainerRef
} from "@react-navigation/native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import DefinitionScreen from "./screens/DefinitionScreen";
import HomeScreen from "./screens/HomeScreen";
import SearchComponent from "./components/navigation/SearchComponent";
import RightBarHeader from "./components/navigation/RightBarHeader";
import LeftBarHeader from "./components/navigation/LeftBarHeader";
import { Entypo } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import LessonScreen from "./screens/LessonScreen";
import LoginStack from "./components/stack/LoginStack";
import LessonStack from "./components/stack/LessonStack";
import HomeStack from "./components/stack/HomeStack";
import { rootNavigation } from "./RootNavigation";
import NotebookScreen from "./screens/NotebookScreen";
import { Provider, useDispatch } from "react-redux";
import store from "./context/store";
import { setNotebooks } from "./context/actions/NotebookAction";
import { getAccountId } from "./helpers";
import { getAllNotebookFromAccount } from "./service/NotebookService";
import LoginScreen from "./screens/LoginScreen";

import { LogBox } from "react-native";
import ProfileStack from "./components/stack/ProfileStack";
// LogBox.ignoreLogs(['Asyncstorage: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs(); //Ignore all log notifications
const Tab = createBottomTabNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const ProfileComponent = () => ProfileStack({ setLoggedIn })

  if (loggedIn) {
    return (
      <Provider store={store}>
        <NavigationContainer ref={rootNavigation}>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{ activeTintColor: "#e91e63" }}
          >
            <Tab.Screen
              name="Home"
              component={HomeStack}
              options={{
                tabBarVisible: false,
                tabBarLabel: "Trang chủ",
                tabBarIcon: ({ color, size }) =>
                  <FontAwesome name="home" color={color} size={size} />,
                headerTitle: ({ navigation }) => {
                  return <SearchComponent />;
                },
                headerRight: () => {
                  return <RightBarHeader />;
                },
                headerLeft: () => {
                  return <LeftBarHeader />;
                }
              }}
            />
            <Tab.Screen
              name="Notebook"
              component={NotebookScreen}
              options={{
                tabBarVisible: false,
                tabBarLabel: "Số tay",
                tabBarIcon: ({ color, size }) =>
                  <FontAwesome name="book" size={size} color={color} />
              }
              // headerTitle: () => {
              //     return <SearchComponent />;
              // },
              //
              // headerRight: () => {
              //     return <RightBarHeader />;
              // },
              //
              // headerLeft: () => {
              //     return (
              //         <Ionicons
              //             name="arrow-back-sharp"
              //             size={24}
              //             color="#2499FF"
              //             style={{ marginLeft: 10 }}
              //         />
              //     );
              // }
              }
            />
            <Tab.Screen
              name="Lesson"
              component={LessonStack}
              options={{
                tabBarLabel: "Bài học",
                tabBarIcon: ({ color, size }) =>
                  <AntDesign name="play" size={size} color={color} />
              }}
            />
            <Tab.Screen
              name="Profile của tôi "
              component={ProfileComponent}
              options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ color, size }) =>
                  <FontAwesome name="user-circle-o" size={size} color={color} />
              }}
            />
            {/*<Tab.Screen*/}

            {/*    name="Login"*/}
            {/*    component={LoginStack}*/}
            {/*    options={{*/}
            {/*        headerShown: false,*/}
            {/*        tabBarVisible: false,*/}
            {/*        tabBarLabel: "Login",*/}
            {/*        tabBarIcon: ({ color, size }) =>*/}
            {/*            <Entypo name="login" size={24} color={color} />,*/}
            {/*        headerLeft: () => {*/}
            {/*            return (*/}
            {/*                <Ionicons*/}
            {/*                    name="arrow-back-sharp"*/}
            {/*                    size={24}*/}
            {/*                    color="#2499FF"*/}
            {/*                    style={{ marginLeft: 10 }}*/}
            {/*                />*/}
            {/*            );*/}
            {/*        }*/}
            {/*    }}*/}
            {/*/>*/}
          </Tab.Navigator>
          {/* <LoginStack setLoggedIn={setLoggedIn} /> */}
        </NavigationContainer>
      </Provider>
    );
  } else {
    return (
      <NavigationContainer ref={rootNavigation}>
        <LoginStack setLoggedIn={setLoggedIn} />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 10
  }
});
