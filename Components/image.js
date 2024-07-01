import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React from 'react';

const Image1 = () => {
    return (
    <>
    
    <Image source={require('./assets/kopi.png')}
    style={{
    width: 200,
    height: 200,
    alignContent: 'center',
    justifyContent: 'flex-start',
    marginLeft: 100 }}></Image>

    </>
    )
}
export default Image1