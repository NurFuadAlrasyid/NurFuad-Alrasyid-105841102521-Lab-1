import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginPage = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
      
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
  
        <Text style={styles.forgotYourPassword}>
          Forgot your paswword? 
        </Text>
  
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
  
        <Text style={styles.orLoginWith}>Or login with social account</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../assets/google.png')}
              style={styles.socialButtonIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../assets/facebook.png')}
              style={styles.socialButtonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      paddingHorizontal: 30,
    },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      height: 50,
      borderColor: 'green',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      fontSize: 18,
      marginBottom: 10,
    },
    forgotYourPassword: {
      marginTop: 10,
      fontSize: 16,
    },
    loginButton: {
      backgroundColor: 'green',
      paddingVertical: 15,
      borderRadius: 5,
      marginTop: 20,
      alignItems: 'center',
    },
    loginButtonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    orLoginWith: {
      marginTop: 20,
      fontSize: 16,
      textAlign: 'center',
    },
    socialButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    socialButton: {
      backgroundColor: '#f0f0f0',
      padding: 10,
      borderRadius: 5,
      marginHorizontal: 10,
      alignItems: 'center',
      width: 50,
      height: 50,
      justifyContent: 'center',
    },
    socialButtonIcon: {
      width: 30,
      height: 30,
    },
  });
  
  export default LoginPage;