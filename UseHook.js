import React from 'react';
import { View, Text, Button, Image } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/main-menu/home-aktif.jpg'
import HomeNonAktif from './assets/main-menu/home-nonaktif.jpg'
import ShopAktif from './assets/main-menu/shop-aktif.jpg'
import ShopNonAktif from './assets/main-menu/shop-nonaktif.jpg'
import BagAktif from './assets/main-menu/bag_aktif.jpg'
import BagNonAktif from './assets/main-menu/bag-nonaktif.jpg'
import FavoritesAktif from './assets/main-menu/favorites-aktif.jpg'
import FavoritesNonAktif from './assets/main-menu/favorites-nonaktif.jpg'
import ProfileAktif from './assets/main-menu/profile-aktif.jpg'
import ProfileNonAktif from './assets/main-menu/profile-nonaktif.jpg'
import Shop from './Menu/Shop';
import Bag from './Menu/Bag';
import Favorites from './Menu/Favorites';
import Profile from './Menu/Profile';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                     <Stack.Screen name='Login' component={LoginPage} />
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
        component={HomeScreen}
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
        name="Bag"
            component={Bag}
            options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <Image
                source={focused ? BagAktif : BagNonAktif}
                style={{ width: 30, height: 30 }}
                />
            ),
        }}
      />
      <Tab.Screen
        name="favorites"
            component={Favorites}
            options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <Image
                source={focused ? FavoritesAktif : FavoritesNonAktif}
                style={{ width: 30, height: 30 }}
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

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
}


export default App;