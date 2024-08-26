import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/main-menu/home-aktif.jpg'
import HomeNonAktif from './assets/main-menu/home-nonaktif.jpg'
import ShopAktif from './assets/main-menu/shop_aktif.jpg'
import ShopNonAktif from './assets/main-menu/shop_nonaktif.jpg'
import MapsAktif from './assets/main-menu/maps-aktif.jpg'
import MapsNonAktif from './assets/main-menu/maps-nonaktif.jpg'
import ProfileAktif from './assets/main-menu/profile-aktif.jpg'
import ProfileNonAktif from './assets/main-menu/profile-nonaktif.jpg'
import Shop from './Menu/Shop';
import Maps from './Menu/Maps';
import Profile from './Menu/Profile';
import Home from './Menu/Home'


const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name='Sign Up' component={SignUpPage} />
                <Stack.Screen name='Login' component={LoginPage} />
                <Stack.Screen name='ForgotPassword' component={ForgotPasswordPage} />
                <Stack.Screen name='Home' component={MyTabs} />
               
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <Image
                source={focused ? HomeAktif : HomeNonAktif}
                style={{ width: 30, height: 30 }}
                />
            ),
        }}
      />
      <Tab.Screen
        name="Shop"
            component={Shop}
            options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <Image
                source={focused ? ShopAktif : ShopNonAktif}
                style={{ width: 30, height: 30 }}
                />
            ),
        }}
      />
      <Tab.Screen
        name="Gunung"
            component={Maps}
            options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <Image
                source={focused ? MapsAktif : MapsNonAktif}
                style={{ width: 25, height: 25 }}
                />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
            component={Profile}
            options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <Image
                source={focused ? ProfileAktif : ProfileNonAktif}
                style={{ width: 30, height: 30 }}
                />
            ),
        }}
      />

    </Tab.Navigator>
  );
}

export default App;