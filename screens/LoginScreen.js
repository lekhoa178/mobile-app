import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Switch, Pressable } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Implement your authentication logic here
    // For simplicity, we'll just log the entered values
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MONOLINGO</Text>
      <Text style= {styles.textWelcome}>Login to your account !</Text>
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
      ><Text style ={styles.textLogin}>Login</Text>
      </Pressable>
  

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    textAlign: 'center',
    fontSize:35,
    fontWeight:'bold',
    color:'#2499FF',
    marginBottom:15,
  },
  textWelcome: {
    textAlign: 'center',
    color:'gray',
    marginBottom:15,
  },
  label: {
    marginHorizontal:15,
    fontSize: 16,
    color:'gray'
  },
  input: {
    borderWidth:0,
    borderBottomWidth:1,
    marginHorizontal:15,
    marginTop:10,
    borderRadius:20,
    height: 40,
    borderColor: '#2499FF',
    marginBottom: 12,
    paddingHorizontal: 15,
    marginBottom:20
  },
   rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
   loginButton: {
    display:'flex',
    justifyContent:'center',
    marginHorizontal:20,
    backgroundColor: '#2499FF', 
    padding: 10,
    marginTop:20,
    borderRadius: 20, 
  },
  loginButtonText: {
    color: 'white', // Change the text color
    fontSize: 18,
    fontWeight: 'bold', // Make the text bold
  },
  textLogin: {
    textAlign: 'center',
    color:'white', // Change the text color
  }
});

export default LoginScreen;
