import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const SignUpPage = () => {
  const [fontsLoaded] = useFonts({
    'Metropolis-Bold': require('../assets/fonts/Metropolis-Bold.otf'),
    'Metropolis-Medium': require('../assets/fonts/Metropolis-Medium.otf'),
  });

  const [formSignUp, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigation = useNavigation();

  const onSubmit = () => {
    if (formSignUp.name && formSignUp.email && formSignUp.password) {
      alert('Sign Up Berhasil');
      navigation.navigate('Login');
    } else {
      alert('Sign Up Gagal', 'Semua field harus diisi');
    }
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Font tidak ditemukan!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'Metropolis-Bold' }]}>Sign Up</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setForm({ ...formSignUp, name: text })}
        value={formSignUp.name}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setForm({ ...formSignUp, email: text })}
        value={formSignUp.email}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setForm({ ...formSignUp, password: text })}
        value={formSignUp.password}
      />
      <TouchableOpacity style={styles.signUpButton} onPress={onSubmit}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.loginText, { fontFamily: 'Metropolis-Medium' }]}>
            Already have an account? <Text style={styles.loginLink}>→</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.socialSignUpContainer}>
        <Text style={styles.orSignUpWith}>Or sign up with a social account</Text>
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
  signUpButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    fontSize: 14,
    color: 'blue',
  },
  loginLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  socialSignUpContainer: {
    alignItems: 'center',
  },
  orSignUpWith: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
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

export default SignUpPage;
