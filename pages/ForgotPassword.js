import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
  
    const handleEmailChange = (text) => {
        setEmail(text);
    };
  
    const handleSendPress = () => {
        // Logic untuk mengirim link reset password
    };
  
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot password</Text>
            <Text style={styles.instruction}>
                Please, enter your email address. You will receive a link to create a new password via email.
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={handleEmailChange}
            />
            <Text style={styles.errorText}>Not a valid email address. Should be your@email.com</Text>
            <TouchableOpacity style={styles.sendButton} onPress={handleSendPress}>
                <Text style={styles.sendButtonText}>SEND</Text>
            </TouchableOpacity>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    instruction: {
        fontSize: 14,
        marginBottom: 20,
        color: '#333',
    },
    input: {
        height: 50,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 5,
    },
    errorText: {
        color: 'green',
        fontSize: 12,
        marginBottom: 20,
    },
    sendButton: {
        backgroundColor: 'green',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    sendButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
  });
  
  export default ForgotPassword;