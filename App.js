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

const Tab = createBottomTabNavigator();
export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  return (
    // <SafeAreaView style={styles.baseContainer}>
    //   <SearchPanel />
    //   <DefinitionScreen />
    // </SafeAreaView>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            // headerShown: false,
            tabBarVisible: false,
            tabBarLabel: 'a',
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
