import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [userData, setUserData] = useState({ name: '', email: '' });

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }
      } catch (error) {
        console.log('Failed to load user data', error);
      }
    };

    loadUserData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My profile</Text>
        <Image source={{ uri: './assets/main-menu/search.png' }} style={styles.searchIcon} />
      </View>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/main-menu/FotoProfil.jpg')} style={styles.profileImage} />
        <Text style={styles.nameText}>{userData.name}</Text>
        <Text style={styles.emailText}>{userData.email}</Text>
      </View>
      <View style={styles.optionsContainer}>
        <OptionItem title="My orders" subtitle="Already have 12 orders" />
        <OptionItem title="Shipping addresses" subtitle="3 addresses" />
        <OptionItem title="Payment methods" subtitle="Visa **34" />
        <OptionItem title="Promocodes" subtitle="You have special promocodes" />
        <OptionItem title="My reviews" subtitle="Reviews for 4 items" />
        <OptionItem title="Settings" subtitle="Notifications, password" />
      </View>
    </ScrollView>
  );
};

const OptionItem = ({ title, subtitle }) => {
  return (
    <TouchableOpacity style={styles.optionItem}>
      <View>
        <Text style={styles.optionTitle}>{title}</Text>
        <Text style={styles.optionSubtitle}>{subtitle}</Text>
      </View>
      <Image source={{ uri: './assets/main-menu/tanda-panah.png' }} style={styles.chevronIcon} />
    </TouchableOpacity>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  emailText: {
    fontSize: 16,
    color: '#888',
  },
  optionsContainer: {
    marginTop: 30,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  chevronIcon: {
    width: 20,
    height: 20,
  },
});
