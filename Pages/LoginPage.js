import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
  const [fontsLoaded] = useFonts({
    'Metropolis-Bold': require('../assets/fonts/Metropolis-Bold.otf'),
    'Metropolis-Medium': require('../assets/fonts/Metropolis-Medium.otf'),
  });

  const [formLogin, setForm] = useState({
    email: '',
    password: ''
  });

  const onSubmit = () => {
    if (formLogin.email && formLogin.password) {
      alert('Login Berhasil');
      navigation.navigate('Home');
    } else {
      alert('Login Gagal');
    }
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Font tidak ditemukan!</Text>
      </View>
    );
  }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'Metropolis-Bold' }]}>Login</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(hasil) => setForm({ ...formLogin, email: hasil })}
        value={formLogin.email}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setForm({ ...formLogin, password: text })}
        value={formLogin.password}
      />
      <TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={[styles.forgotPasswordText, { fontFamily: 'Metropolis-Medium' }]}>
          Forgot Password? <Text style={styles.forgotPasswordLink}>→</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.socialLoginContainer}>
        <Text style={styles.orLoginWith}>Or Login With social media</Text>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/google.png')} style={styles.socialButtonIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/facebook.png')} style={styles.socialButtonIcon} />
          </TouchableOpacity>
        </View>
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: 'gray',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: 'blue',
  },
  forgotPasswordLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    alignItems: 'center',
  },
  orLoginWith: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  socialButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
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
