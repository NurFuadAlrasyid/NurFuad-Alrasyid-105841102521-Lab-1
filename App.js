import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Metro-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
    'Metro-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
    'Metro-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
    'Metro-Black': require('./assets/fonts/Metropolis-Black.otf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.centeredView}>
        <Text style={{ fontSize: 18 }}>Font tidak ditemukan!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30}}>Hello There</Text>
      <Text style={{ fontFamily: 'Metro-Bold', fontSize: 30 }}>Metro Bold</Text>
      <Text style={{ fontFamily: 'Metro-Medium', fontSize: 30 }}>Metro Medium</Text>
      <Text style={{ fontFamily: 'Metro-SemiBold', fontSize: 30 }}>Metro SemiBold</Text>
      <Text style={{ fontFamily: 'Metro-Black', fontSize: 30 }}>Metro Black</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
