import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Dimensions,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import DefinitionScreen from './screens/DefinitionScreen';
import SearchPanel from './components/SearchPanel';
import HomeScreen from './screens/HomeScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import SearchComponent from './components/navigation/SearchComponent';
import RightBarHeader from './components/navigation/RightBarHeader';
import LeftBarHeader from './components/navigation/LeftBarHeader';
import { Entypo } from '@expo/vector-icons';
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            // headerShown: false,
            tabBarVisible: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name='home' color={color} size={size} />
            ),
            headerTitle: () => {
              return <SearchComponent />;
            },

            headerRight: () => {
              return <RightBarHeader />;
            },

            headerLeft: () => {
              return <LeftBarHeader />;
            },
          }}
        />
        <Tab.Screen
          name='Definitions'
          component={DefinitionScreen}
          options={{
            tabBarVisible: false,
            tabBarLabel: 'Details',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name='star' color={color} size={size} />
            ),
            headerTitle: () => {
              return <SearchComponent />;
            },

            headerRight: () => {
              return <RightBarHeader />;
            },

            headerLeft: () => {
              return (
                <Ionicons
                  name='arrow-back-sharp'
                  size={24}
                  color='#2499FF'
                  style={{ marginLeft: 10 }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name='Login'
          component={LoginStack}
          options={{
            headerShown: false,
            tabBarVisible: false,
            tabBarLabel: 'Login',
            tabBarIcon: ({ color, size }) => (
              <Entypo name='login' size={24} color={color} />
            ),

            headerLeft: () => {
              return (
                <Ionicons
                  name='arrow-back-sharp'
                  size={24}
                  color='#2499FF'
                  style={{ marginLeft: 10 }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
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
