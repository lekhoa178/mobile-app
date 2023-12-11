import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { registerService } from "../service/LoginService";

const marginLeft = 20;
const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleGoback = () => {
    navigation.goBack();
  };

  const handleSignUp = async () => {
    console.log("Email: ", email);
    console.log("username: ", username);
    console.log("password: ", password);
    console.log("Repeat Password: ", repeatPassword);
    if (password != repeatPassword) {
      Alert.alert(
        "Đăng kí thất bại",
        "Mật khẩu nhập lại không khớp với mật khẩu đã nhập",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    } else {
      try {
        await registerService(email, username, password);
        Alert.alert(
          "Đăng kí thành công",
          "Tài khoản đăng kí thành công, mời bạn đăng nhập",
          [{ text: "OK", onPress: () => handleGoback() }],
          { cancelable: false }
        );
      }
      catch(e){
        Alert.alert(
          "Đăng kí thất bại",
          "Hệ thống hiện tại bị lỗi, mời bạn đăng lí lại lúc sau",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      }
      

    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MONOLINGO</Text>
      <Text style={styles.textWelcome}>Sign up to your account !</Text>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
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
      <Text style={styles.label}>Repeat password: </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter repeat password"
        secureTextEntry={true}
        value={repeatPassword}
        onChangeText={text => setRepeatPassword(text)}
      />

      <Pressable
        onPress={handleSignUp}
        style={styles.loginButton}
        titleStyle={styles.loginButtonText}
      >
        <Text style={styles.textLogin}>Sign Up</Text>
      </Pressable>

      <Pressable style={styles.buttonBack} onPress={handleGoback}>
        <Ionicons name="ios-arrow-back-outline" size={24} color="white" />
        <Text style={{ textAlign: "center", color: "white" }}>Back</Text>
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
  },
  buttonBack: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: 20,
    width: "25%",
    marginTop: 30,
    backgroundColor: "#2499FF",
    padding: 7,
    borderRadius: 20
  }
});

export default SignUpScreen;
