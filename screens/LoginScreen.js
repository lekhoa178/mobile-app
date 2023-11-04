import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  Pressable
} from "react-native";
import { Navigation } from "react-native-navigation";
const marginLeft = 20;
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Implement your authentication logic here
    // For simplicity, we'll just log the entered values
    console.log("Username:", username);
    console.log("Password:", password);
  };
  const handleSignUp = () => {
    navigation.navigate("signup");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MONOLINGO</Text>
      <Text style={styles.textWelcome}>Login to your account !</Text>
      <Text style={styles.label}>Username: </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <Text style={styles.label}>Password: </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <View style={styles.rememberMe}>
        <Text style={styles.label}>Remember Me: </Text>
        <Switch
          value={rememberMe}
          onValueChange={value => setRememberMe(value)}
        />
      </View>
      <Pressable
        onPress={handleLogin}
        style={styles.loginButton}
        titleStyle={styles.loginButtonText}
      >
        <Text style={styles.textLogin}>Login</Text>
      </Pressable>
      <Pressable
        onPress={handleSignUp}
        style={styles.loginButton}
        titleStyle={styles.loginButtonText}
      >
        <Text style={styles.textLogin}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  title: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    color: "#2499FF",
    marginBottom: 15
  },
  textWelcome: {
    textAlign: "center",
    color: "gray",
    marginBottom: 15
  },
  label: {
    marginHorizontal: marginLeft + 20,
    fontSize: 16,
    color: "gray"
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 1,
    marginHorizontal: marginLeft,
    marginTop: 10,
    borderRadius: 20,
    height: 40,
    borderColor: "#2499FF",
    paddingLeft: 20,
    marginBottom: 20
  },
  rememberMe: {
    flexDirection: "row",
    alignItems: "center"
  },
  loginButton: {
    marginHorizontal: marginLeft,
    backgroundColor: "#2499FF",
    marginTop: 20,
    borderRadius: 20,
    padding: 10
  },
  loginButtonText: {
    color: "white", // Change the text color
    fontSize: 18,
    fontWeight: "bold" // Make the text bold
  },
  textLogin: {
    textAlign: "center",
    color: "white" // Change the text color
  }
});

export default LoginScreen;
